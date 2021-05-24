import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	Score: {
		color: '#f6ea09',
		fontSize: '2.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
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
		fontSize: '2.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	CurrentScore:{
		color: '#f6ea09',
		fontSize: '2.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	}
}))

const Score = ({score, bonus, currentScore}) => {
	const classes = useStyles()
	useEffect(() => {
	}, [bonus])
	return (
		<div className={classes.Statistic}>
			<div className={classes.Score}>Score: {score}</div>
			<div className={classes.Bonus}>Bonus: X{bonus}</div>
		</div>
	)
}

export default Score
