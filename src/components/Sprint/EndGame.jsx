import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	EndGame: {
		fontSize: '3.5rem',
		color: '#f6ea09',
	},
	PlayAgainButton: {
		textAlign: 'center',
		fontSize: '3.5rem',
		display: 'flex',

		alignItems: 'center',
		justifyContent: 'center',
		width: '400px',
		height: '100px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
}))

<<<<<<< HEAD
const EndGame = properties => {
	const classes = useStyles()
	useEffect(() => {
		console.log('Bonus', properties)
=======
const EndGame = props => {
	const classes = useStyles()
	useEffect(() => {
		console.log('Bonus', props)
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
	}, [])
	return (
		<div className={classes.EndGame}>
			<div>Time is up. Your result:</div>
			<Link
				underline='none'
				color='inherit'
				className={classes.PlayAgainButton}
				href='/games/sprint?name=0'>
				<div style={{ color: '#f6ea09' }}>Play Again</div>
			</Link>
		</div>
	)
}

export default EndGame
