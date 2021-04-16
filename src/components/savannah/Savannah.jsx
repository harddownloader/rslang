import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
import { getStatistics, setStatistics } from '@/utils/apiRequests/statistics'
import Rules from '@/components/savannah/Rules'
import Game from '@/components/savannah/Game'

const useStyles = makeStyles({
	savannah: {
		zIndex: 50,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		fontSize: '2rem',
		alignItems: 'center',
	},
})

export default function Savannah(props) {
	const classes = useStyles()
	const [isGame, setGame] = useState(false)
	const [difficulty, setDifficulty] = useState('0')
	const [stat, setStat] = useState()
	const userAuth = props.userAuth


	useEffect(() => {
		try {
			getStatistics(userAuth.userId, userAuth.token)
				.then(resp => setStat({ ...resp }))
		}
		catch (error) {
			setError(error)
		}
	}, [])
	useEffect(() => {
		if (stat) {
			if (!stat.item) {
				let currentDate = new Date(Date.now())
				currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 1}`
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


	return (!props.userAuth.token) ? <Redirect to='/login' /> :
		(
			<div className={classes.savannah}>
				{isGame ? (
					<Game difficulty={difficulty} userAuth={props.userAuth} setGame={setGame} stat={stat} />
				) : (
					<Rules
						start={setGame}
						setDifficulty={setDifficulty}
						difficulty={difficulty}
					/>
				)}
			</div>
		)
}
