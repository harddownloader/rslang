import React, { useEffect, useState } from 'react'
import { getAggregatedWords } from '@/utils/apiRequests/aggregatedWords'
import { makeStyles } from '@material-ui/core/styles'
import Loader from '@/components/savannah/Loader'
import GameBoard from '@/components/savannah/GameBoard'


const useStyles = makeStyles({
	savannahGame: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	error: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: 'auto',
	},
})

function ErrorMessage(properties) {
	const classes = useStyles()
	return (
		<div className={classes.error}>
			<h1>Huoston, We have a problem..</h1>
			<p>{properties.error.message} :(</p>
		</div>
	)
}
export default function Game(properties) {
	const userID = properties.userAuth.userId
	const userToken = properties.userAuth.token
	const classes = useStyles()
	const [words, setWords] = useState()
	const [isError, setError] = useState()
	const [isLoaded, setIsLoaded] = useState(false)
	const [newGame, setNewGame] = useState(false)
	const [page, setPage] = useState(0)
	useEffect(() => {
		if (newGame) {
			setPage(page + 1)
			setNewGame(false)
			setIsLoaded(false)
		}
		try {
			getAggregatedWords(userID, userToken, 0, page, 20, '{"userWord.optional.games.savannah.learned": false}')
				.then(res => {
					setWords(res[0].paginatedResults)
					return res[0].paginatedResults
				})
				.then((words) => {
					if (words.length === 20) {
						setIsLoaded(true)
						return words
					}
					setError({ message: 'Sorry.. You should learn more words before next game' })
				})
		}
		catch (error) {
			setError(error)
		}

	}, [newGame])
	return (
		<div className={classes.savannahGame}>
			{(isLoaded & !isError) ? (
				<GameBoard words={words.sort((a, b) => (Math.random() - 0.5))} newGame={setNewGame} stat={properties.stat} userAuth={properties.userAuth} />
			) : (
				<Loader />
			)}
			{isError ? <ErrorMessage error={isError} /> : undefined}
		</div>
	)
}

export { useStyles }
