import React, { useEffect, useState } from 'react'
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
	gameStatus: {
		display: 'flex',
		width: '55%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	taskWord: {
		color: 'Black',
		fontWeight: 'bold',
		fontSize: '8rem',
		margin: '2rem',
	},
	timer: {
		marginLeft: '6%',
		fontSize: '2.5rem',
	},
	attempts: {
		margin: '3rem',
		alignSelf: 'flex-end',
		fontSize: '4rem',
	},
	variableOptions: {
		width: '70%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '4rem',
	},
	option: {
		width: 'available',
		margin: '1rem auto 3rem auto',
		fontSize: '2.5rem',
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
				<GameBoard words={words} newGame={setNewGame} />
			) : (
				<Loader />
			)}
			{isError ? <ErrorMessage error={isError} /> : undefined}
		</div>
	)
}

export { useStyles }
