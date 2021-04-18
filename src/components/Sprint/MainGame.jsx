import React, { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { randomArray } from '@/components/Sprint/words'
import { makeStyles } from '@material-ui/core/styles'
import Score from '@/components/Sprint/Score'
import Description from '@/components/Sprint/Description'
import Timer from '@/components/Sprint/Timer'
import TrueMarks from '@/components/Sprint/TrueMarks'
import useTimeout from '@/components/Sprint/UseTimeOut'
import EndGame from '@/components/Sprint/EndGame'
import { ArrowLeft } from '@material-ui/icons'

import { updateUserWordsById } from '@/utils/apiRequests/userWords'

const useStyles = makeStyles(theme => ({
	SprintRoot: {
		width: '80%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		fontFamily: 'Open Sans',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
	},
	wordContainer: {
		width: '80%',
		height: '300px',
		fontFamily: 'Open Sans',
		borderColor: '#f6ea09',
		display: 'flex',
		alignItems: 'center',
		border: '2px solid yellow ',
		flexDirection: 'column',
		justifyContent: 'center',
		fontSize: '3.5rem',
		color: 'black',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
			width: '270px',
			height: '215px',
		},
	},
	buttonBlock: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		paddingTop: '30px',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '0px',
		},
	},
	buttonTrue: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '150px',
		height: '60px',
		color: '#f6ea09',
		border: '1px solid',
		cursor: 'pointer',
		borderColor: '#f6ea09',
		fontSize: '3.5rem',
		[theme.breakpoints.down('sm')]: {
			minWidth: '100px',
			fontSize: '2.5rem',
			height: '30px',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	buttonFalse: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '150px',
		height: '60px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		fontSize: '3.5rem',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			minWidth: '100px',
			height: '30px',
			fontSize: '2.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	checkAnswer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '250px',
		height: '80px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		fontSize: '5.5rem',
	},
	VisualTimer: {
		height: '200px',
		fontSize: '4rem',
		[theme.breakpoints.down('sm')]: {
			height: '100px',
			fontSize: '2.5rem',
		},
	},
}))

const translateCheck = (wordCheck, badTranslate) => {
	const result = badTranslate.filter(e => e !== wordCheck)
	return result
}
const trueWords = []
const falsesWords = []

const MainGame = properties => {
	const classes = useStyles()

	const [answerTrue, setTrueAnswer] = useState(0)
	const [answerFalse, setFalseAnswer] = useState(0)
	const falseArray = []
	const [answerCount, setAnswerCount] = useState(0)
	const [isCorrect, setFlag] = useState(true)
	const [word, setWord] = useState(null)
	const [translate, setTranslate] = useState(null)
	const [value, setValue] = useState(0)
	const [currentWords, setData] = useState(null)
	const [falseWords, setFalseWords] = useState(0)
	const [score, setScore] = useState(0)
	const [bonus, setBonus] = useState(1)
	const [color, setColor] = useState(null)
	const [textDescription, setTextDescription] = useState(null)
	const [seconds, setSeconds] = useState(30)
	const [isGame, setGame] = useState(true)
	const [buttonColor, setButtonColor] = useState(null)

	const [gameStat, setGameStat] = useState(properties.stat)


	const [sessionStat, setSessionStat] = useState({
		incorrect: [],
		bestStrick: 0,
		currentStrick: 0,
		correct: 0,
	})

	const makeWordField = () => {
		const rand = Math.floor(Math.random() * 2)
		if (rand) {
			setFlag(true)
			setWord(currentWords[value].word)
			setTranslate(currentWords[value].wordTranslate)
		} else {
			setFlag(false)
			setWord(currentWords[value].word)
			setTranslate(
				translateCheck(currentWords[value].wordTranslate, falseWords)[value],
			)
		}
	}

	const bonusCounter = count => {
		setTextDescription('RIGHT!')
		if (count === 3) {
			setAnswerCount(1)
			setBonus(bonus + 1)
			setColor('255, 165, 0,')
			setTextDescription('RIGHT 3! Bonus Score!')
		}
	}

	const gettingScore = count => {
		switch (count) {
			case 1:
				setScore(score + 10)
				break
			case 2:
				setScore(score + 20)
				break
			case 3:
				setScore(score + 30)
				break
			case 4:
				setScore(score + 40)
				break
			default:
				break
		}
	}

	const checkButtonTrue = () => {
		if (isCorrect) {
			setColor('255, 255, 0,')

			setSessionStat({
				...sessionStat,
				currentStrick: sessionStat.currentStrick + 1,
				bestStrick: Math.max(sessionStat.bestStrick, ++sessionStat.currentStrick),
				correct: ++sessionStat.correct,
			})

			setGameStat({
				...gameStat,
				item: {
					...gameStat.item,
					answerTrue: ++gameStat.item.answerTrue,
					games: {
						...gameStat.item.games,
						sprint: {
							...gameStat.item.games.sprint,
							countAnswer: ++gameStat.item.games.sprint.countAnswer,
							trueAnswer: ++gameStat.item.games.sprint.trueAnswer,
							seriesAnswer: Math.max(gameStat.item.games.sprint.seriesAnswer, sessionStat.bestStrick),
						},
					}
				}
			})

			updateUserWordsById(
				properties.userId,
				properties.userToken,
				currentWords[value]._id,
				currentWords[value].difficulty,
				{
					...currentWords[value].optional,
					correct_answers: currentWords[value].userWord.optional.correct_answers + 1,
					games: {
						...currentWords[value].userWord.optional.games,
						sprint: {
							learned: true,
						},
					},
				},
			)


			setAnswerCount(answerCount + 1)
			bonusCounter(answerCount)
			gettingScore(bonus)
			trueWords.push(currentWords[value])
			setTrueAnswer(answerTrue + 1)
			setValue(value + 1)
			makeWordField()
		} else {
			setColor('255, 0, 0,')
			setTextDescription('WRONG')

			setSessionStat({
				...sessionStat,
				incorrect: [currentWords[value], ...sessionStat.incorrect],
				currentStrick: 0,
			})
			setGameStat({
				...gameStat,
				item: {
					...gameStat.item,
					games: {
						...gameStat.item.games,
						sprint: {
							...gameStat.item.games.sprint,
							countAnswer: ++gameStat.item.games.sprint.countAnswer,
						},
					},
				}
			})
			updateUserWordsById(
				properties.userId,
				properties.userToken,
				currentWords[value]._id,
				currentWords[value].difficulty,
				{
					...currentWords[value].userWord.optional,
					uncorrect_answers: currentWords[value].userWord.optional.uncorrect_answers + 1,
				},
			)

			falsesWords.push(currentWords[value])
			setFalseAnswer(answerFalse + 1)
			setValue(value + 1)
			setBonus(1)
			setAnswerCount(0)
			makeWordField()
		}
	}

	const checkButtonFalse = () => {
		if (!isCorrect) {
			setColor('255, 255, 0,')

			setSessionStat({
				...sessionStat,
				currentStrick: sessionStat.currentStrick + 1,
				bestStrick: Math.max(sessionStat.bestStrick, ++sessionStat.currentStrick),
				correct: ++sessionStat.correct,
			})

			setGameStat({
				...gameStat,
				item: {
					...gameStat.item,
					answerTrue: ++gameStat.item.answerTrue,
					games: {
						...gameStat.item.games,
						sprint: {
							...gameStat.item.games.sprint,
							countAnswer: ++gameStat.item.games.sprint.countAnswer,
							trueAnswer: ++gameStat.item.games.sprint.trueAnswer,
							seriesAnswer: Math.max(gameStat.item.games.sprint.seriesAnswer, sessionStat.bestStrick),
						},
					}
				}
			})

			updateUserWordsById(
				properties.userId,
				properties.userToken,
				currentWords[value]._id,
				currentWords[value].difficulty,
				{
					...currentWords[value].optional,
					correct_answers: currentWords[value].userWord.optional.correct_answers + 1,
					games: {
						...currentWords[value].userWord.optional.games,
						sprint: {
							learned: true,
						},
					},
				},
			)


			setAnswerCount(answerCount + 1)
			bonusCounter(answerCount)
			gettingScore(bonus)
			trueWords.push(currentWords[value])
			setTrueAnswer(answerTrue + 1)
			setValue(value + 1)
			makeWordField()
		} else {
			setColor('255, 0, 0,')
			setTextDescription('WRONG')

			setSessionStat({
				...sessionStat,
				incorrect: [currentWords[value], ...sessionStat.incorrect],
				currentStrick: 0,
			})
			setGameStat({
				...gameStat,
				item: {
					...gameStat.item,
					games: {
						...gameStat.item.games,
						sprint: {
							...gameStat.item.games.sprint,
							countAnswer: ++gameStat.item.games.sprint.countAnswer,
						},
					},
				}
			})
			updateUserWordsById(
				properties.userId,
				properties.userToken,
				currentWords[value]._id,
				currentWords[value].difficulty,
				{
					...currentWords[value].userWord.optional,
					uncorrect_answers: currentWords[value].userWord.optional.uncorrect_answers + 1,
				},
			)


			falsesWords.push(currentWords[value])
			setFalseAnswer(answerFalse + 1)
			setValue(value + 1)
			setBonus(1)
			setAnswerCount(0)
			makeWordField()
		}
	}

	useEffect(() => {
		for (const item of properties.wordsData) {
			falseArray.push(item.wordTranslate)
		}
		setFalseWords(falseArray)
		setData(randomArray(properties.wordsData))
		setWord(properties.wordsData[value].word)
		setTranslate(properties.wordsData[value].wordTranslate)
		setValue(value + 1)
	}, [])

	useEffect(() => {
		let timeId
		if (seconds > 0) {
			timeId = setTimeout(setSeconds, 1000, seconds - 1)
		} else {
			setGame(false)
		}
		return () => {
			clearTimeout(timeId)
		}
	}, [seconds])

	const handleKey = e => {
		if (isGame) {
			if (e.key === 'ArrowLeft') {
				checkButtonTrue()
			} else if (e.key === 'ArrowRight') {
				checkButtonFalse()
			}
		}
		e.preventDefault()
	}

	useEffect(() => {
		if (isGame) window.addEventListener('keyup', handleKey)
		return () => window.removeEventListener('keyup', handleKey)
	})




	return (
		<div className={classes.SprintRoot}>
			{isGame ? (
				<div className={classes.SprintRoot}>
					<div className={classes.VisualTimer}>
						<CountdownCircleTimer
							style={{ fontSize: '5rem' }}
							isPlaying
							size={90}
							duration={30}
							colors={[
								['#004777', 0.33],
								['#F7B801', 0.33],
								['#A30000', 0.33],
							]}>
							{({ remainingTime }) => remainingTime}
						</CountdownCircleTimer>
					</div>

					<div
						className={classes.wordContainer}
						style={{ backgroundColor: `rgba(${color} 0.7` }}>
						<div className={classes.currentWord}>
							<span>{word}</span>
						</div>
						<div className={classes.currentTranslate}>
							<span>{translate}</span>
						</div>
						<TrueMarks
							style={{ fontSize: '3.5rem' }}
							marksCount={answerCount}
						/>
						<Description content={textDescription} />
					</div>
					<div className={classes.buttonBlock}>
						<div
							style={{ backgroundColor: `${buttonColor}` }}
							className={classes.buttonTrue}
							onClick={() => {
								checkButtonTrue()
							}}>
							<div>True</div>
						</div>

						<div
							style={{ backgroundColor: `${buttonColor}` }}
							className={classes.buttonFalse}
							onClick={() => {
								checkButtonFalse()
							}}>
							<div>False</div>
						</div>
					</div>
					<Score score={score} bonus={bonus - 1} currentScore={bonus} />
				</div>
			) : (
				<EndGame
					score={score}
					trueWords={trueWords}
					falsesWords={falsesWords}
					answerTrue={answerTrue}
					answerFalse={answerFalse}
					userId={properties.userId}
					userToken={properties.userToken}
					gameStat={gameStat}
					sessionStat={sessionStat}
					exp={sessionStat.correct}
				/>
			)}
		</div>
	)
}

export default MainGame
