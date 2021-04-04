import React, { useState, useEffect } from 'react'
//import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

import { randomArray } from '@/components/Sprint/words'
import { makeStyles } from '@material-ui/core/styles'
import Score from '@/components/Sprint/Score'
import Description from '@/components/Sprint/Description'
import Timer from '@/components/Sprint/Timer'
import TrueMarks from '@/components/Sprint/TrueMarks'
import useTimeout from '@/components/Sprint/UseTimeOut'

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
		minWidth: '200px',
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
		minWidth: '200px',
		height: '60px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		fontSize: '3.5rem',
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

const MainGame = props => {
	const classes = useStyles()
	const url = 'https://rs-lang-app.herokuapp.com/words?page=2&group=0'
	let checkMarks = []
	const falseArray = []
	const [answerCount, setAnswerCount] = useState(0)
	const [isCorrect, setFlag] = useState(true)
	const [word, setWord] = useState(null)
	const [translate, setTraslate] = useState(null)
	const [value, setValue] = useState(0)
	const [currentWords, setData] = useState(null)
	const [falseWords, setFalseWords] = useState(0)
	const [score, setScore] = useState(0)
	const [bonus, setBonus] = useState(1)
	const [color, setColor] = useState(null)
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

	const bonusCounter = count => {
		if (count === 3) {
			setAnswerCount(1)
			setBonus(bonus * 2)
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

	const checkBtnTrue = () => {
		if (isCorrect) {
			setAnswerCount(answerCount + 1)
			bonusCounter(answerCount)

			setValue(value + 1)
			setTextDescription('Верно')

			makeWordField()
			gettingScore(bonus)
			setColor('green')
		} else {
			setTextDescription('Ошибка')
			setValue(value + 1)
			setBonus(1)
			setAnswerCount(0)
			makeWordField()
			setColor('red')
		}
	}

	const checkBtnFalse = () => {
		if (!isCorrect) {
			setAnswerCount(answerCount + 1)
			bonusCounter(answerCount)
			gettingScore(bonus)
			bonusCounter(answerCount)
			setTextDescription('Верно')
			console.log(answerCount)
			setValue(value + 1)
			makeWordField()
			setColor('green')
		} else {
			setTextDescription('Ошибка')
			setValue(value + 1)
			setBonus(1)
			setAnswerCount(0)
			console.log(answerCount)
			makeWordField()
			setColor('red')
		}
	}

	useEffect(() => {
		console.log(props.wordsData)
		props.wordsData.forEach(item => {
			falseArray.push(item.wordTranslate)
		})
		setFalseWords(falseArray)
		setData(randomArray(props.wordsData))
		setWord(props.wordsData[value].word)
		setTraslate(props.wordsData[value].wordTranslate)
		setValue(value + 1)
	}, [])

	return (
		<div className={classes.SprintRoot}>
			<Score score={score} bonus={bonus} />
			<div
				className={classes.wordContainer}
				style={{ backgroundColor: `${color}` }}>
				<div className={classes.currentWord}>
					<span>{word}</span>
				</div>
				<div className={classes.currentTranslate}>
					<span>{translate}</span>
				</div>
				<TrueMarks marksCount={answerCount} />
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
