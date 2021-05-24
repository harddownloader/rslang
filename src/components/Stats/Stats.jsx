import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Profile from './Profile/Profile'
import DisplayStats from './DisplayStats/DisplayStats'
import Progress from './Progress/Progress'
import Recharts from './diagram/Recharts'
import RechartsProgress from './diagram/RechartsProgress'
import Select from './Select/Select'
import MetaTag from '../MetaTag/MetaTag'
import returnDate from '@/utils/returnDate'
import Header from '@/components/header'
import { Redirect } from 'react-router-dom'
import Footer from '../Footer/Footer'

// const loginUser = async user => {
// 	const rawResponse = await fetch(
// 		'https://rs-lang-app.herokuapp.com/signin',
// 		{
// 			method: 'POST',
// 			headers: {
// 				Accept: 'application/json',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(user),
// 		},
// 	)
// 	console.log('rawResponse', rawResponse)

// 	if (rawResponse.status === 200) {
// 		const content = await rawResponse.json()
// 		console.log('loginUser', content)
// 		return content
// 	} else {
// 		alert('Введите корректные данные')
// 	}
// }

// export async function setStatistics(userId, token, learnedWords, optional) {
// 	const rawResponseStatsSet = await fetch(
// 		`https://rs-lang-app.herokuapp.com/users/${userId}/statistics`,
// 		{
// 			method: 'PUT',
// 			withCredentials: true,
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 				Accept: 'application/json',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				learnedWords: learnedWords,
// 				optional: optional
// 			}),
// 		},
// 	)

// 	const setStats = await rawResponseStatsSet.json()
// 	console.log('setStatistics', setStats)
// 	return setStats
// }

export async function getStatistics(userId, token) {
	const rawResponseStatsGet = await fetch(
		`https://rs-lang-app.herokuapp.com/users/${userId}/statistics`,
		{
			method: 'GET',
			withCredentials: true,
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		},
	)
	const getStats = await rawResponseStatsGet.json()
	console.log('getStatistics', getStats)
	return getStats
}

const useStyles = makeStyles({
	wrapper: {
		height: 'auto',
	},
	wrapperProfiler: {
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		background: '#353344e3;',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '400px',
		margin: '25px 0px',
		textAlign: 'center',
	},
	wrapperStats: {
		backgroundImage:
			'url(https://png.pngtree.com/illustrations/20190320/ourlarge/pngtree-high-tech-2-5d-technology-the-internet-png-image_22625.jpg)',
		backgroundSize: '832px 400px',
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '400px',
		marginTop: '25px',
		textAlign: 'center',
	},
	button: {
		border: 'none',
		textDecoration: 'none',
		display: 'inline-block',
		width: '90px',
		height: '90px',
		borderRadius: '90px',
		margin: '10px 20px',
		fontFamily: "'Montserrat', sans-serif",
		fontSize: '11px',
		textAlign: 'center',
		fontWeight: '900',
		color: '#524f4e',
		background: 'white',
		boxShadow: '0 8px 15px rgba(0, 0, 0, .1)',
		transition: '.3s',
		'&:hover': {
			background: '#2EE59D',
			boxShadow: '0 15px 20px rgba(46, 229, 157, .4)',
			color: 'white',
			transform: 'translateY(-7px)',
		},
	},
	buttonArray: {
		border: 'none',
		textDecoration: 'none',
		display: 'inline-block',
		width: '90px',
		height: '90px',
		borderRadius: '90px',
		margin: '10px 20px',
		fontFamily: "'Montserrat', sans-serif",
		fontSize: '11px',
		textAlign: 'center',
		fontWeight: '900',
		color: '#524f4e',
		background: '#2EE59D',
		boxShadow: '0 8px 15px rgba(0, 0, 0, .1)',
		transition: '.3s',
		'&:hover': {
			background: '#2EE59D',
			boxShadow: '0 15px 20px rgba(46, 229, 157, .4)',
			color: 'black',
			transform: 'translateY(-7px)',
		},
	},
	recharts: {
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		background: 'rgb(12, 179, 232)',
		background:
			'linear-gradient(90deg, rgba(12,179,232,1) 2%, rgba(38,241,211,1) 80%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '450px',
		marginTop: '25px',
		textAlign: 'center',
	},
})

const newdate = returnDate()

console.log('newdate', newdate)

const Stats = (props) => {

	console.log('stats', props)

	const [date, setDate] = useState(null)

	useEffect(async () => {
		// const logedUser = await loginUser({ email: "john@gmail.com", password: "qwerty1111" })
		// console.log("loged", logedUser)
		// const settingDate = await setStatistics(logedUser.userId, logedUser.token, 1, {
		// 	level: 2,
		// 	exp: 50,
		// 	dates: {
		// 		dateItems: [
		// 			{
		// 				dateTime: newdate,
		// 				games: {
		// 					savana: {
		// 						countAnswer: 8,
		// 						trueAnswer: 3,
		// 						seriesAnswer: 5
		// 					},
		// 					audio: {
		// 						countAnswer: 2,
		// 						trueAnswer: 1,
		// 						seriesAnswer: 7
		// 					},
		// 					myGame: {
		// 						countAnswer: 6,
		// 						trueAnswer: 1,
		// 						seriesAnswer: 2
		// 					},
		// 					sprint: {
		// 						countAnswer: 3,
		// 						trueAnswer: 2,
		// 						seriesAnswer: 1
		// 					}
		// 				}
		// 			},
		// 			{
		// 				dateTime: '2021-4-12',
		// 				countAnswer: 0,
		// 				answerTrue: 0,
		// 				seriesAnswer: 0,
		// 				games: {
		// 					savana: {
		// 						countAnswer: 8,
		// 						trueAnswer: 6,
		// 						seriesAnswer: 5
		// 					},
		// 					audio: {
		// 						countAnswer: 2,
		// 						trueAnswer: 7,
		// 						seriesAnswer: 7
		// 					},
		// 					myGame: {
		// 						countAnswer: 6,
		// 						trueAnswer: 4,
		// 						seriesAnswer: 2
		// 					},
		// 					sprint: {
		// 						countAnswer: 3,
		// 						trueAnswer: 9,
		// 						seriesAnswer: 1
		// 					}
		// 				}
		// 			}
		// 		]
		// 	}
		// })
		// console.log(settingDate)
		const gettingStatistics = await getStatistics(
			props.userAuth.userId,
			props.userAuth.token,
		)
		console.log('gettingStatistics', gettingStatistics)
		setDate(gettingStatistics.optional)
		console.log(date)
	}, [])

	console.log('date', date)

	const [isStats, setIsStats] = useState(true)

	const setStats = () => {
		setIsStats(!isStats)
	}

	const classes = useStyles()

	const progressDate = date
		? date.dates.dateItems.map(item => {
			if (item.date == newdate) {
				return item
			}
		})
		: null

	const [progress, setProgress] = useState(
		<Progress stats={{ countAnswer: 0, trueAnswer: 0, seriesAnswer: 0 }} />,
	)

	const [but, setBut] = useState([
		{ id: 1, name: 'Саванна', bool: false },
		{ id: 2, name: 'Аудио-вызов', bool: false },
		{ id: 3, name: 'Спринт', bool: false },
	])
	const setbut = (id) => {
		setBut(
			but.map((item) => {

				if (item.id == id) {
					item.bool = true
					return item
				} else {
					item.bool = false
				}
				return item
			})
		)
	}

	const setButton = (type) => {
		switch (type) {
			case 1:
				setProgress(<Progress stats={progressDate[0].games.savana} />)
				break
			case 2:
				setProgress(<Progress stats={progressDate[0].games.audio} />)
				break
			case 3:
				setProgress(<Progress stats={progressDate[0].games.sprint} />)
				break
		}
	}


	const getbut = but.map((item) => {

		return (
			<Grid item lg={12} xs={12} key={item.id}>

				<Button size='large' className={item.bool ? classes.buttonArray : classes.button} onClick={() => {
					setbut(item.id)
					setButton(item.id)
				}}>
					{item.name}
				</Button>
			</Grid >
		)
	})

	return (!props.userAuth.token) ? <Redirect to='/login' /> :
		(
			<div style={{ background: '#28282a' }} >
				<Header />
				<MetaTag text='Statistics' />
				<Container maxWidth='lg' className={classes.wrapper}>
					<Grid container spacing={2}>
						<Grid className={classes.wrapperProfiler} item xs={12} xl={3}>
							{date && (
								<Profile exp={date.exp} />
							)}
						</Grid>
						<Grid item xs={1}></Grid>
						<Grid className={classes.wrapperStats} item xs={12} xl={8}>
							{isStats ? (
								<>
									<Select setStats={setStats} />
									{date && <DisplayStats dates={progressDate} />}
								</>
							) : (
								<>
									<Select setStats={setStats} />
								</>
							)}
						</Grid>
					</Grid>
					{isStats ? (
						<Grid container className={classes.recharts} spacing={2}>
							<Grid container item xs={3}>
								{getbut}
							</Grid>
							<Grid item xs={9}>
								{progress}
							</Grid>
						</Grid>
					) : (
						<Grid container className={classes.recharts}>
							<Grid item md={6} xs={12}>
								{date && <Recharts stats={date.dates.dateItems} date={newdate} />}
							</Grid>
							<Grid item md={6} xs={12}>
								{date && (
									<RechartsProgress stats={date.dates.dateItems} date={newdate} />
								)}
							</Grid>
						</Grid>
					)}
				</Container>
				<Footer whiteFont />
			</div>
		)
}

export default Stats
