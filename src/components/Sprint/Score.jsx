import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

<<<<<<< HEAD
const useStyles = makeStyles(theme => ({
=======
const useStyles = makeStyles(theme=>({
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
	Score: {
		color: '#f6ea09',
		fontSize: '3.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
	},
	Statistic: {
		display: 'flex',
		flexDirection: 'raw',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
	},
	Bonus: {
		color: '#f6ea09',
		fontSize: '3.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
	},
}))

const Score = properties => {
	const classes = useStyles()
	useEffect(() => {
		console.log('Bonus', properties.bonus)
	}, [properties.bonus])
	return (
		<div className={classes.Statistic}>
<<<<<<< HEAD
			<div className={classes.Score}>Score: {properties.score}</div>
			<div className={classes.Bonus}>Bonus: +{properties.bonus}</div>
=======
			<div className={classes.Score}>Score: {props.score}</div>
			<div className={classes.Bonus}>Bonus: +{props.bonus}</div>
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
		</div>
	)
}

export default Score
