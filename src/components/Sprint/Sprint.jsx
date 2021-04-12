import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Redirect } from 'react-router-dom'
=======

import img from '../../assets/images/gamesPage/sprint.jpg'
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
import MainGame from '@/components/Sprint/MainGame'
import Footer from '@/components/Footer/Footer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { makeStyles } from '@material-ui/core/styles'
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons'
import img from '../../assets/images/gamesPage/sprint.jpg'
import useDataApi from '@/utils/useDataApi'

import { getAggregatedWords } from '@/utils/apiRequests/aggregatedWords'

const useStyles = makeStyles(theme => ({
	SprintRoot: {
		width: '80%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		background: `${img}`,
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
	},
	StartSprintRoot: {
		paddingTop: '10px',
		height: '100%',
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
		},
	},
	StartGame: {
		textAlign: 'center',
		fontSize: '3.5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '400px',
		height: '100px',
		color: '#f6ea09',
		border: '1px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '300px',
			height: '50px',
			fontSize: '2.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	cls: {
		color: 'red',
		fontSize: '5.5rem',
		textAlign: 'center',
	},
	groupChanger: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	groupDescribe: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '3.5rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
	},
	Levels: {
		width: '100%',
		minHeight: '150px',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		flexWrap: 'wrap',
		[theme.breakpoints.down('sm')]: {
			width: '230px',
		},
	},
	currentLvl_1: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '40px',
		height: '40px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '30px',
			height: '30px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	currentLvl_2: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '50px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '40px',
			height: '40px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	currentLvl_3: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '60px',
		height: '60px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '50px',
			height: '50px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	currentLvl_4: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '70px',
		height: '70px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '60px',
			height: '60px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	currentLvl_5: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '80px',
		height: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '70px',
			height: '70px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},

	currentLvl_6: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '90px',
		height: '90px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#f6ea09',
		fontSize: '2.5rem',
		border: '2px solid',
		borderColor: '#f6ea09',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: '80px',
			height: '80px',
			fontSize: '1.5rem',
		},
		'&:hover': {
			backgroundColor: 'gray',
		},
	},
	visual: {
		fontSize: '5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	VisualTimer: {
		height: '120px',
		fontSize: '5rem',
	},
}))
<<<<<<< HEAD

const Sprint = ({ userId, userToken }) => {
	if (!userId) {
		return <Redirect to='/login' />
	}
=======
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32

	const classes = useStyles()
	const [rendering, setRender] = useState(true)
	const [isButtonClick, setIsButtonClick] = useState(false)
	const [wordsData, setWords] = useState(null)
	const [lvl, setLvl] = useState(0)

	const [seconds, setSeconds] = React.useState(5)
	const [timerActive, setTimerActive] = useState(false)

	useEffect(() => {
		let timeId
		if (seconds > 0 && timerActive) {
			timeId = setTimeout(setSeconds, 1000, seconds - 1)
		} else {
			setTimerActive(false)
		}
		return () => {
			clearTimeout(timeId)
		}
	}, [seconds, timerActive])
	useEffect(() => {
		if (timerActive === false && isButtonClick) {
			setRender(false)
		}
	}, [isButtonClick, timerActive])

	const [
		{ data, isLoading, isError },
		doFetch, // eslint-disable-line no-unused-vars
	] = useDataApi(
		getAggregatedWords,
		{ userId, userToken, group: lvl, initialWords: 60 },
		[],
	)
	useEffect(() => {
<<<<<<< HEAD
		doFetch(
			getAggregatedWords,
			{ userId, userToken, group: lvl, initialWords: 60 },
			[],
		)
	}, [lvl, setLvl])

	// useEffect(() => {
	// 	fetch(`https://rs-lang-app.herokuapp.com/words?page=2&group=${lvl}`)
	// 		.then(response => response.json())
	// 		.then(data => setWords(data))
	// }, [lvl])

	if (!userId) {
		return <Redirect to='/login' />
	}

	if (isError) {
		return <div>Something went wrong ...</div>
	}
	if (isLoading) {
		return (
			<div className={classes.loader}>
				<CountdownCircleTimer
					style={{ fontSize: '5rem' }}
					isPlaying
					size={120}
					duration={5}
					colors={[
						['#004777', 0.33],
						['#F7B801', 0.33],
						['#A30000', 0.33],
					]}>
					{({ remainingTime }) => remainingTime}
				</CountdownCircleTimer>
			</div>
		)
	}
=======
		fetch(`https://rs-lang-app.herokuapp.com/words?page=2&group=${lvl}`)
			.then(response => response.json())
			.then(data => setWords(data))
	}, [lvl])
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32

	return (
		<div className={classes.SprintRoot}>
			{rendering && (
				<div className={classes.StartSprintRoot}>
					<div
						className={classes.StartGame}
						onClick={() => {
							setTimerActive(!timerActive)
							setIsButtonClick(true)
						}}>
						Start Game
					</div>
					<div className={classes.groupChanger}>
						<div className={classes.groupDescribe}>
							<span>Difficulty level: {lvl + 1}</span>
						</div>
						<div className={classes.Levels}>
							<div className={classes.currentLvl_1} onClick={() => setLvl(0)}>
								1
							</div>
							<div className={classes.currentLvl_2} onClick={() => setLvl(1)}>
								2
							</div>
							<div className={classes.currentLvl_3} onClick={() => setLvl(2)}>
								3
							</div>
							<div className={classes.currentLvl_4} onClick={() => setLvl(3)}>
								4
							</div>
							<div className={classes.currentLvl_5} onClick={() => setLvl(4)}>
								5
							</div>
							<div className={classes.currentLvl_6} onClick={() => setLvl(5)}>
								6
							</div>
						</div>
					</div>
					<div className={classes.VisualTimer}>
						{timerActive && (
							<div className={classes.VisualTimer}>
								<CountdownCircleTimer
									style={{ fontSize: '5rem' }}
									isPlaying
									size={120}
									duration={5}
									colors={[
										['#004777', 0.33],
										['#F7B801', 0.33],
										['#A30000', 0.33],
									]}>
									{({ remainingTime }) => remainingTime}
								</CountdownCircleTimer>
							</div>
						)}
					</div>
				</div>
			)}

			{/* <Game seconds={seconds} /> */}
<<<<<<< HEAD
			{!rendering && <MainGame wordsData={data} />}
=======
			{!rendering && <MainGame wordsData={wordsData} />}
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
			<Footer />
		</div>
	)
}

export default Sprint
