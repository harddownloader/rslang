import React, { useEffect, useState } from 'react'
import useDataApi from '@/utils/useDataApi'
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
	console.dir(properties.userAuth)
	const userID = properties.userAuth.userId
	const token = properties.userAuth.token
	const classes = useStyles()
	const [words, setWords] = useState()
	const [isError, setError] = useState()
	const [isLoaded, setIsLoaded] = useState(false)
	const [newGame, setNewGame] = useState(false)
	const [page, setPage] = useState(0)
	// const [{ setWords, setIsLoaded, setError }] = useDataApi(getAggregatedWords, [userID, token, properties.difficulty], [])
	useEffect(() => {
		if (newGame) {
			setPage(page + 1)
			setNewGame(false)
			setIsLoaded(false)
		}
		fetch(
			`https://rs-lang-app.herokuapp.com/words?group=${properties.difficulty}&page=${page}`,
		)
			.then(response => response.json())
			.then(
				result => {
					setWords(result)
					setIsLoaded(true)
				},
				error => {
					setError(error)
					setIsLoaded(true)
				},
			)
	}, [newGame])
	return (
		<div className={classes.savannahGame}>
			{isLoaded && !isError ? (
				<GameBoard words={words.sort((a, b) => (Math.random() - 0.5))} newGame={setNewGame} />
			) : (
				<Loader />
			)}
			{isError ? <ErrorMessage error={isError} /> : undefined}
		</div>
	)
}

export { useStyles }
