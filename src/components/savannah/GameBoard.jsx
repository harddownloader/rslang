import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timer from '@/components/savannah/Timer'
import Attempts from '@/components/savannah/Attempts'
import Button from '@material-ui/core/Button'
import Result from '@/components/savannah/Result'
import GameResult from '@/components/savannah/GameResult'

const initialStat = {
	strick: 0,
	bestStrick: 0,
	date: Date.now(),
	correct: [],
	incorrect: [],
}

const useStyles = makeStyles({
	gameStatus: {
		display: 'flex',
		width: '80%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2rem auto',
	},
	attempts: {

		alignSelf: 'flex-end',
		fontSize: '4rem',
	},
	taskWord: {
		color: '#363538',
		fontWeight: 'bold',
		fontSize: '8rem',
		margin: '2rem',
	},
	variableOptions: {
		width: '70%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '4rem',
	},
	option: {
		width: 'available',
		margin: '1rem auto 3rem auto',
		fontSize: '2.5rem',
		color: '#363538',
		border: 'solid 2px yellow',
		borderRadius: '0',
		'&:hover': {
			border: 'solid 1px yellow',
			backgroundColor: '#fffbad',
		},
	},
})

function getOptions(correct, words) {
	const set = new Set()
	set.add(correct)
	do {
		set.add(words[Math.floor(Math.random() * 20)].wordTranslate)
	} while (set.size < 4)
	return [...set].sort(() => Math.random() - 0.5)
}

export default function GameBoard(properties) {
	const classes = useStyles()
	const [level, setLevel] = useState(0)
	const [word, setWord] = useState(properties.words[level])
	const [options, setOptions] = useState(getOptions(word.wordTranslate, properties.words))
	const [gameStat, setGameStat] = useState(initialStat)
	const [attempts, setAttempts] = useState(5)
	const [isGame, setIsGame] = useState(true)
	const [isLose, setIsLose] = useState(false)
	const [isEndGame, setEndGame] = useState(false)

	useEffect(() => {
		setIsLose(false)
		setWord(properties.words[level])
		console.log(properties.words[level])
		setOptions(getOptions(word.wordTranslate, properties.words))
	}, [level])
	useEffect(() => {
		setOptions(getOptions(word.wordTranslate, properties.words))
		setIsGame(true)
	}, [word])
	useEffect(() => {
		if (attempts === 0) setEndGame(gameStat)
	}, [attempts])

	function round(result) {
		switch (result) {
			case 'win':
				setIsGame(false)
				setGameStat({
					...gameStat,
					correct: [word, ...gameStat.correct],
					strick: gameStat.strick + 1,
					bestStrick: Math.max(gameStat.strick + 1, gameStat.bestStrick),
				})
				break
			case 'lose':
				setIsGame(false)
				setAttempts(attempts - 1)
				setIsLose(true)
				setGameStat({
					...gameStat,
					incorrect: [word, ...gameStat.incorrect],
					strick: 0,
				})
				break
			default:
				setGameStat({ ...gameStat })
				break
		}
	}

	function handleClick(event) {
		if (event.target.textContent) {
			const selectedWord = event.target.textContent
			selectedWord === word.wordTranslate.toUpperCase()
				? round('win')
				: round('lose')
		}
		return event
	}
	return (
		<>
			{isEndGame ? (
				<GameResult stat={isEndGame} newGame={properties.newGame} />
			) : undefined}
			<div className={classes.gameStatus}>
				{isGame ? (
					<Timer sec={5} lose={round} />
				) : (
					<Result result={isLose} />
				)}
				<div className={classes.attempts}>
					<Attempts num={attempts} endGame={properties.endGame} />
				</div>
			</div>
			<h2 className={classes.taskWord}>{word.word.toUpperCase()}</h2>
			<div className={classes.variableOptions}>
				{options.map(function options_(option, index) {
					return (
						<Button
							variant='outlined'
							color='secondary'
							className={classes.option}
							key={index}
							disabled={!isGame}
							onClick={event => handleClick(event)}>
							{option.toString().toUpperCase()}
						</Button>
					)
				})}
			</div>
			{isGame ? undefined : (
				<Button
					variant='outlined'
					color='secondary'
					className={classes.option}
					onClick={() => {
						level === 19 ? setEndGame(gameStat) : setLevel(level + 1)
					}}>
					NEXT
				</Button>
			)}
		</>
	)
}
