import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { setStatistics } from '@/utils/apiRequests/statistics'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	result: {
		width: '100%',
		height: '100%',
		zIndex: '100',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		justifySelf: 'center',
		position: 'absolute',
		top: '0',
		left: '0',
		backgroundColor: '#363538',
		color: '#fafa68',
		textShadow: '2px 2px 10px #fff875',
		fontSize: '3rem',
	},
	result__title: {
		fontSize: '9rem',
		margin: '2rem',
	},
	result__btns: {
		height: '15%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: '2rem',
	},
	result__btn: {
		textDecoration: 'none',
		color: '#fafa68',
		border: 'solid 2px #fff875',
		fontSize: '1.5rem',
		'&:hover': {
			border: 'solid 1px yellow',
			backgroundColor: '#fffbad',
			color: '#363538'
		},
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
		},
	},

	words: {
		maxWidth: '70%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '2rem auto 3rem',
	},
	word: {
		fontWeight: 'bold',
		margin: '0.2rem 2rem',
		fontSize: '22px',
		fontSize: '4rem',
	},
}))

export default function GameResult(properties) {
	let currentDate = new Date(Date.now())
	const currentExp = +properties.gameStat.origin.optional.exp + +properties.exp
	currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
	let filteredOrigin = properties.gameStat.origin.optional.dates.dateItems
	filteredOrigin = filteredOrigin.filter((item) => item.date !== currentDate)
	const finalStat = {
		...properties.gameStat.origin.optional,
		dates: {
			dateItems: [...filteredOrigin, { ...properties.gameStat.item }]
		},
		exp: currentExp,
	}
	setStatistics(properties.userAuth.userId, properties.userAuth.token, 0, finalStat)

	const classes = useStyles()
	const restartGame = properties.newGame
	function ShouldLearn() {
		return (
			<>
				<p>
					Pay attention to this word
					{properties.sessionStat.incorrect.length > 1 ? 's' : ''}:
				</p>
				<div className={classes.words}>
					{properties.sessionStat.incorrect.map(function result(item, index) {
						return <p key={index} className={classes.word}>{item.word.toUpperCase()}</p>
					})}
				</div>
			</>
		)
	}
	return (
		<div className={classes.result}>
			<h2 className={classes.result__title}>Game over</h2>
			<p>Your best strick of correct answers: {properties.sessionStat.bestStrick}</p>
			<p>
				Correctly answer{properties.sessionStat.correct > 1 ? 's' : ''}:{` `} {properties.sessionStat.correct}
			</p>
			{properties.sessionStat.incorrect.length > 0 ? (
				<ShouldLearn />
			) : undefined}
			<div className={classes.result__btns}>
				<Button
					color='secondary'
					className={classes.result__btn}
					onClick={() => restartGame(true)}>
					New game
				</Button>
				<Button
					color='secondary'
					className={classes.result__btn}>
					<Link to='/'>Back to main page</Link>
				</Button>
			</div>
		</div>
	)
}
