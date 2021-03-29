import React, { useState, useEffect } from 'react'
//import { CountdownCircleTimer } from 'react-countdown-circle-timer'

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

	const [isCorrect, setFlag] = useState(true)
	const [word, setWord] = useState(null)
	const [translate, setTraslate] = useState(null)
	const [value, setValue] = useState(0)
	const [currentWords, setWords] = useState(0)
	const [falseWords, setFalseWords] = useState(0)
	const [count, setCount] = useState(0)
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

	const checkBtnTrue = () => {
		if (isCorrect) {
			setValue(value + 1)
			setTextDescription('Верно')
			makeWordField()
			setCount(count + 10)
		} else {
			setValue(value + 1)
			setTextDescription('Ошибка')
			makeWordField()
		}
	}

	const checkBtnFalse = () => {
		if (!isCorrect) {
			setValue(value + 1)
			setTextDescription('Верно')
			makeWordField()
			setCount(count + 10)
		} else {
			setValue(value + 1)
			makeWordField()
		}
	}

	useEffect(() => {
		// fetch('https://rs-lang-app.herokuapp.com/words?page=2&group=0')
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		data.forEach(element => {
		// 			falseArray.push(element.wordTranslate)
		// 		})
		// 		console.log(falseArray)
		// 		setFalseWords(randomArray(falseArray))
		// 		setWords(randomArray(data))
		// 		setWord(currentWords[value].word)
		// 		setTraslate(currentWords[value].wordTranslate)
		// 	})
		setWords(randomArray(makeFirstWords(url)))
		console.log(currentWords)

		// gameWords = makeFirstWords()
		// console.log(gameWords)
		// // gameWords.forEach(element => {
		// // 	falseArray.push(element.wordTranslate)
		// // })
		// setFalseWords(randomArray(falseArray))
		// setWords(randomArray(gameWords))
		// setWord(currentWords[value].word)
		// setTraslate(currentWords[value].wordTranslate)
	}, [])

	return (
		<div className={classes.SprintRoot}>
			<Score score={count} />
			<div className={classes.wordContainer}>
				<div className={classes.currentWord}>
					<span>{word}</span>
				</div>
				<div className={classes.currentTranslate}>
					<span>{translate}</span>
				</div>
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
