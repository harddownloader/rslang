import React, { useState, useEffect } from 'react'
//import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

import { randomArray } from '@/components/Sprint/words'
import { makeStyles } from '@material-ui/core/styles'
import Score from '@/components/Sprint/Score'
import Description from '@/components/Sprint/Description'
import Timer from '@/components/Sprint/Timer'

const useStyles = makeStyles({
	SprintRoot: {
		width: '80%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	wordContainer: {
		width: '80%',
		height: '400px',
		border: '2px solid',
		borderColor: 'red',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		fontSize: '3.5rem',
		color: 'black',
	},
	buttonBlock: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
	},
	buttonTrue: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '250px',
		height: '60px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		fontSize: '3.5rem',
	},
	buttonFalse: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '250px',
		height: '60px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		fontSize: '3.5rem',
	},
})

const translateCheck = (wordCheck, badTranslate) => {
	const result = badTranslate.filter(e => e !== wordCheck)
	return result
}
const makeFirstWords = async url => {
	let arrWodrs = await fetch(url)
		.then(response => response.json())
		.then(data => data)
	console.log(arrWodrs)
	return arrWodrs
}

const MainGame = () => {
	const classes = useStyles()
	const url = 'https://rs-lang-app.herokuapp.com/words?page=2&group=0'
	let gameWords = []
	const falseArray = []
	const [answerCount, setAnswerCount] = useState(0)
	const [isCorrect, setFlag] = useState(true)
	const [word, setWord] = useState(null)
	const [translate, setTraslate] = useState(null)
	const [value, setValue] = useState(0)
	const [currentWords, setData] = useState(null)
	const [falseWords, setFalseWords] = useState(0)
	const [score, setScore] = useState(0)
	const [textDescription, setTextDescription] = useState(null)

	const makeWordField = () => {
		const rand = Math.floor(Math.random() * 2)
		if (rand) {
			setFlag(true)
			setWord(currentWords[value].word)
			setTraslate(currentWords[value].wordTranslate)
		} else {
			setFlag(false)
			setWord(currentWords[value].word)
			setTraslate(
				translateCheck(currentWords[value].wordTranslate, falseWords)[value],
			)
		}
	}

	const addChekedBonus = count => {
		switch (count) {
			case 1:
				return <DoneOutlineIcon />
				break

			case 2:
				return (
					<div>
						<DoneOutlineIcon /> <DoneOutlineIcon />
					</div>
				)
				break
			case 3:
				return (
					<div>
						<DoneOutlineIcon /> <DoneOutlineIcon /> <DoneOutlineIcon />
					</div>
				)
				break
			default:
				break
		}
	}

	const checkCount = count => {
		if (count == 3) {
			setAnswerCount(0)
			checkCount(answerCount)
		}
	}

	const checkBtnTrue = () => {
		if (isCorrect) {
			setAnswerCount(answerCount + 1)
			setValue(value + 1)
			setTextDescription('Верно')
			console.log(answerCount)
			makeWordField()
			setScore(score + 10)
		} else {
			setTextDescription('Ошибка')
			setValue(value + 1)
			setAnswerCount(0)
			console.log(answerCount)
			makeWordField()
		}
	}

	const checkBtnFalse = () => {
		if (!isCorrect) {
			setAnswerCount(answerCount + 1)

			setScore(score + 10)
			setTextDescription('Верно')
			console.log(answerCount)
			setValue(value + 1)
			makeWordField()
		} else {
			setTextDescription('Ошибка')
			setValue(value + 1)
			setAnswerCount(0)
			console.log(answerCount)
			makeWordField()
		}
	}

	useEffect(() => {
		fetch('https://rs-lang-app.herokuapp.com/words?page=2&group=0')
			.then(response => response.json())
			.then(data => {
				data.forEach(item => {
					falseArray.push(item.wordTranslate)
				})
				setFalseWords(falseArray)
				setData(randomArray(data))
				setWord(data[value].word)
				setTraslate(data[value].wordTranslate)
				setValue(value + 1)
			})

		console.log(document.getElementsByClassName('trueCheck'))
	}, [])

	useEffect(() => {
		console.log('This is ', answerCount)
	}, [answerCount])

	return (
		<div className={classes.SprintRoot}>
			<Score score={score} />
			<div className={classes.wordContainer}>
				<div className={classes.currentWord}>
					<span>{word}</span>
				</div>
				<div className={classes.currentTranslate}>
					<span>{translate}</span>
				</div>
				<div>{addChekedBonus(answerCount)}</div>
			</div>

			<div id='icons' className={classes.trueCheck}>
				2
			</div>
			<div className={classes.buttonBlock}>
				<div
					className={classes.buttonTrue}
					onClick={() => {
						checkBtnTrue()
					}}>
					<div>True</div>
				</div>
				<Description content={textDescription} />
				<div
					className={classes.buttonFalse}
					onClick={() => {
						checkBtnFalse()
					}}>
					<div>False</div>
				</div>
			</div>
			<Timer sec={30} />
			{/* <CountdownCircleTimer
				isPlaying
				duration={30}
				colors={[
					['#004777', 0.33],
					['#F7B801', 0.33],
					['#A30000', 0.33],
				]}>
				{({ remainingTime }) => remainingTime}
			</CountdownCircleTimer> */}
		</div>
	)
}

export default MainGame
