import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
	Score: {
		color: 'red',
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
		justifyContent: 'space-around',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
	},
	Bonus: {
		color: 'red',
		fontSize: '3.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
	},
}))

const Score = props => {
	const classes = useStyles()
useEffect(()=>{
    console.log('Bonus', props.bonus)

}, [props.bonus])
	return (
		<div className={classes.Statistic}>
			<div className={classes.Score}>Score: {props.score}</div>
			<div className={classes.Bonus}>Bonus: *{props.bonus}</div>
		</div>
	)
}

export default Score
