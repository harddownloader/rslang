import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'
import { setStatistics } from '@/utils/apiRequests/statistics'

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
		height: '50px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
			height: '30px',
			fontSize: '2.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	resultBlock: {
		textAlign: 'center',
		fontSize: '2.1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'raw',
		width: '80%px',
		height: '100px',
		color: '#f6ea09',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
			fontSize: '1.5rem',
			height: '50px',
		},
	},
	resultHead: {
		textAlign: 'center',
		fontSize: '2.1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	resultWord: {
		textAlign: 'center',
		fontSize: '2.1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		color: 'red',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
			width: '300px',
		},
	},
	LearnedWords: {
		textAlign: 'center',
		fontSize: '1.5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'raw',
		width: '100%',
		overFlow: 'scroll',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
			fontSize: '1rem',
		},
	},
	TrueWords: {
		height: '500px',
		overflow: 'auto',
		textAlign: 'left',
		fontSize: '1.5rem',
		display: 'flex',
		alignItems: 'left',
		justifyContent: 'top',
		flexDirection: 'column',
		color: 'red',
		[theme.breakpoints.down('sm')]: {
			height: '250px',
			fontSize: '1rem',
		},
	},
	FalseWords: {
		overflow: 'auto',
		overFlow: 'scroll',
		textAlign: 'left',
		fontSize: '1.5rem',
		display: 'flex',
		alignItems: 'left',
		justifyContent: 'top',
		flexDirection: 'column',
		color: 'red',
		height: '500px',
		[theme.breakpoints.down('sm')]: {
			height: '250px',
			fontSize: '1rem',
		},
	},
}))

const EndGame = ({
	score,
	trueWords,
	falsesWords,
	answerTrue,
	answerFalse,
	userId,
	userToken,
	gameStat,
	sessionStat,
	exp,
}) => {
	const classes = useStyles()
	let trueWordList = trueWords.map((item, index) => {
		return (
			<div key={index}>
				{item.word} - {item.wordTranslate}
			</div>
		)
	})
	let falseWordList = falsesWords.map((item, index) => {
		return (
			<div key={index}>
				{item.word} - {item.wordTranslate}
			</div>
		)
	})

	let currentDate = new Date(Date.now())
	const currentExp = +gameStat.origin.optional.exp + +exp
	currentDate = `${currentDate.getFullYear()}-${
		currentDate.getMonth() + 1
	}-${currentDate.getDate()}`
	let filteredOrigin = gameStat.origin.optional.dates.dateItems
	console.log('filtered0 ->', filteredOrigin)
	filteredOrigin = filteredOrigin.filter(item => item.date !== currentDate)
	console.log('filtered ->', filteredOrigin)
	const finalStat = {
		...gameStat.origin.optional,
		dates: {
			dateItems: [...filteredOrigin, { ...gameStat.item }],
		},
		exp: currentExp,
	}
	console.dir(finalStat)
	setStatistics(userId, userToken, 0, finalStat)

	return (
		<div className={classes.EndGame}>
			<Link
				underline='none'
				color='inherit'
				className={classes.PlayAgainButton}
				href='/games/sprint?name=0'>
				<div style={{ color: '#f6ea09' }}>Play Again</div>
			</Link>
			<div className={classes.resultHead}>Time is up. Your result:</div>
			<div className={classes.resultBlock}>
				<div className={classes.resultScore}>Score: {score}</div>
				<div className={classes.resultAnswer}>Good answer: {answerTrue}</div>
				<div className={classes.resultError}>Bad answer: {answerFalse}</div>
			</div>
			<div className={classes.resultWord}>
				<div>Good Answer:</div>
				<div>Bad Answer:</div>
			</div>
			<div className={classes.LearnedWords}>
				<div className={classes.TrueWords}> {trueWordList}</div>
				<div className={classes.FalseWords}>{falseWordList}</div>
			</div>
		</div>
	)
}

export default EndGame
