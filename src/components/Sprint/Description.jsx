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

<<<<<<< HEAD
const Description = properties => {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.Description}>{properties.content}</div>
=======
const Description = props => {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.Description}>{props.content}</div>
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
		</div>
	)
}

export default Description
