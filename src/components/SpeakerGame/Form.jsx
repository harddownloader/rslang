import React, { useState, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// castom hooks
import { useFormState } from 'react-use-form-state'
import {
	getUserWords,
	setUserWords,
	updateUserWordsById,
	getUserWordsById,
} from '@/utils/apiRequests/userWords'
import { Context } from './Context.jsx'
//----------------------------------------

function Alert(properties) {
	return <MuiAlert elevation={6} variant='filled' {...properties} />
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	inputBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyItems: 'center',
		alignItems: 'center',
	},
	formBox: {
		flexDirection: 'column',
		display: 'flex',
		fontSize: '2rem',
		'& input': {
			outline: 'none',
			width: '80%',
			margin: '1rem 0',
			border: propertiesStyle => {
				if (propertiesStyle.isChecked) {
					return `2px solid ${propertiesStyle.isErrors ? 'red' : 'green'}`
				}
				return 'none'
			},
			borderRadius: 5,
			padding: '2px 4px',
		},
		'& label': { color: '#fff' },
	},
}))

const openFormReducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_OLL':
			return {
				...state,
				isChecked: true,
				open: true,
			}
		case 'SET_ERROR':
			return {
				...state,
				isErrors: true,
			}
		case 'SET_CLOSE':
			return {
				...state,
				open: false,
			}
		default:
			throw new Error('err')
	}
}

const Form = ({ data, setIsOpenPrompt }) => {
	const { contextStatistic } = useContext(Context)
	const [statistic, dispatchStatistic] = contextStatistic
	console.log(statistic)
	const [formState, { label, text }] = useFormState()
	const [state, dispatch] = useReducer(openFormReducer, {
		isErrors: false,
		isChecked: false,
		open: false,
	})
	const { isErrors, isChecked, open } = state
	const classes = useStyles({ isErrors, isChecked })
	const handleClose = reason => {
		if (reason === 'clickaway') {
			return
		}
		dispatch({ type: 'SET_CLOSE' })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (formState.values.word === data.word) {
			dispatchStatistic({ type: 'DECREMENT_CORRECT' })
			statistic.series > statistic.bestSeries &&
				dispatchStatistic({ type: 'BEST_SERIES' })
		} else {
			dispatchStatistic({ type: 'DECREMENT_ERRORS' })
			dispatch({ type: 'SET_ERROR' })
		}
		dispatch({ type: 'OPEN_OLL' })
		setIsOpenPrompt(true)
		e.target.blur()
	}

	return (
		<form onSubmit={handleSubmit} className={classes.formBox}>
			<div className={classes.inputBox}>
				<label {...label('word')}>your answer</label>
				<input
					{...text({
						name: 'word',
					})}
					required
				/>
			</div>
			<Button
				type='submit'
				variant='contained'
				disabled={isChecked}
				color='secondary'>
				Check
			</Button>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity={isErrors ? 'error' : 'success'}>
					{isErrors && isChecked ? `error, current answer ${data.word}` : 'O_o'}
				</Alert>
			</Snackbar>
		</form>
	)
}

Form.propTypes = {
	data: PropTypes.object,
	setIsOpenPrompt: PropTypes.func,
	currentArray: PropTypes.array,
	userId: PropTypes.string,
	userToken: PropTypes.string,
}

export default Form
