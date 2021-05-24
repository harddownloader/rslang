import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import MainGame from '@/components/Sprint/MainGame'
import Footer from '@/components/Footer/Footer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { makeStyles } from '@material-ui/core/styles'
import useDataApi from '@/utils/useDataApi'
import MetaTag from '../MetaTag/MetaTag'
import { getAggregatedWords } from '@/utils/apiRequests/aggregatedWords'
import { getStatistics, setStatistics } from '@/utils/apiRequests/statistics'

const useStyles = makeStyles(theme => ({
	SprintRoot: {
		width: '80%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
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

const Sprint = ({ userId, userToken }) => {
	if (!userId) {
		return <Redirect to='/login' />
	}

	const classes = useStyles()
	const [rendering, setRender] = useState(true)
	const [isButtonClick, setIsButtonClick] = useState(false)
	const [wordsData, setWords] = useState(null)
	const [lvl, setLvl] = useState(0)
	const [stat, setStat] = useState()
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
	] = useDataApi(getAggregatedWords, [userId, userToken, lvl, false, 100, '{"userWord.optional.games.savannah.learned": false}'  ], [])

	useEffect(() => {
		doFetch(
			getAggregatedWords,
			{ userId, userToken, group: lvl, initialWords: 60 },
			[],
		)
	}, [lvl, setLvl])

	useEffect(() => {
			getStatistics(userId, userToken)
				.then(resp => {
					setStat({ ...resp })
				})
	
	
	}, [])

	useEffect(() => {
		if (stat) {
			if (!stat.item) {
				let currentDate = new Date(Date.now())
				currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
				const dateItem = stat.optional.dates.dateItems.find((dateItem) => dateItem.date === currentDate)
				dateItem ? setStat({
					origin: { ...stat },
					item: { ...dateItem },
				})
					: setStat({
						origin: { ...stat },
						item: {
							date: currentDate,
							countWord: 0,
							answerTrue: 0,
							games: {
								savana: {
									countAnswer: 0,
									trueAnswer: 0,
									seriesAnswer: 0
								},
								audio: {
									countAnswer: 0,
									trueAnswer: 0,
									seriesAnswer: 0
								},
								myGame: {
									countAnswer: 0,
									trueAnswer: 0,
									seriesAnswer: 0
								},
								sprint: {
									countAnswer: 0,
									trueAnswer: 0,
									seriesAnswer: 0
								}
							}
						},
					})
			}
		}
	}, [stat])

	if (!userId) {
		return <Redirect to='/login' />
	}

	if (isError) {
		return <div>Something went wrong ...</div>
	}
	if (isLoading) {
		return (
			<div className={classes.SprintRoot}>
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

	return (
		<div className={classes.SprintRoot}>
			<MetaTag text='viiiuuu' />
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
			{!rendering && <MainGame wordsData={data} stat={stat} userId={userId} userToken={userToken}  />}
			<Footer />
		</div>
	)
}

export default Sprint
