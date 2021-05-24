import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
// core components
import styles from '@/assets/jss/material-kit-react/components/customLinearProgressStyle'

const useStyles = makeStyles(styles)

export default function CustomLinearProgress(props) {
	const classes = useStyles()
	const { color, ...rest } = props
	return (
		<LinearProgress
			{...rest}
			classes={{
				root: classes.root + ' ' + classes[color + 'Background'],
				bar: classes.bar + ' ' + classes[color],
			}}
		/>
	)
}

CustomLinearProgress.defaultProps = {
	color: 'gray',
}

CustomLinearProgress.propTypes = {
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'warning',
		'danger',
		'success',
		'info',
		'rose',
		'gray',
	]),
}
