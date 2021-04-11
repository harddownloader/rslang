import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	EndGame: {
		fontSize: '3.5rem',
		color: 'red',
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
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
}))

const EndGame = props => {
	const classes = useStyles()
	useEffect(() => {
		console.log('Bonus', props)
	}, [])
	return (
		<div className={classes.EndGame}>
			<div>Time is up. Your result:</div>
			<div
				className={classes.PlayAgainButton}
				onClick={() => {
					console.log('kek')
				}}>
				Play Again
			</div>
		</div>
	)
}

export default EndGame
