import React, { useState } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
//------------------------------------------

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(1),
	},
}))

export default function NativeSelects({ setLvl, lvl }) {
	const classes = useStyles()

	const handleChange = event => {
		console.log(event.target.value)
		setLvl(event.target.value)
	}

	return (
		<div className={classes.root}>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel htmlFor='outlined-age-native-simple'>Lvl</InputLabel>
				<Select
					native
					value={lvl}
					onChange={handleChange}
					label='Age'
					inputProps={{
						id: 'outlined-age-native-simple',
					}}>
					<option value={0}>beginner</option>
					<option value={1}>elementary</option>
					<option value={2}>intermediate</option>
					<option value={3}>upper intermediate</option>
					<option value={4}>advanced</option>
					<option value={5}>Mastery </option>
					<option value={6}>Good!</option>
				</Select>
			</FormControl>
		</div>
	)
}

NativeSelects.propTypes = {
	setLvl: PropTypes.func,
	lvl: PropTypes.number,
}
