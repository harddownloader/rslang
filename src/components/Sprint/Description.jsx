import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	Description: {
		color: 'red',
		fontSize: '2.5rem',
		textAlign: 'center',
		width: '200px',
		backgroundColor: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
	},
}))

const Description = properties => {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.Description}>{properties.content}</div>
		</div>
	)
}

export default Description
