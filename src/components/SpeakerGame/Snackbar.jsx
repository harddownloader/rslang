import React, { useState } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'

//----------------------------------------

const useStyles = makeStyles(theme => ({
	SnackbarContent: {
		margin: 5,
		transition: 'all 1s ease-in',
		zIndex: 10,
		minWidth: '0',
		transform: styleProperties =>
			!styleProperties.isOpenPrompt
				? `translate(${styleProperties.transform[0]},${styleProperties.transform[1]})`
				: 'translate(0)',
	},
}))

const Snackbar = ({ message, transform, isOpenPrompt }) => {
	const styleProperties = {
		transform,
		isOpenPrompt,
	}
	const classes = useStyles(styleProperties)

	return (
		<SnackbarContent className={classes.SnackbarContent} message={message} />
	)
}

Snackbar.propTypes = {
	message: PropTypes.string,
	transform: PropTypes.array,
	isOpenPrompt: PropTypes.bool,
}

export default Snackbar
