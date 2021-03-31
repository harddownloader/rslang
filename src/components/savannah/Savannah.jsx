import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
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

export default function Savannah() {
	const classes = useStyles()
	const [isGame, setGame] = useState(false)
	const [difficulty, setDifficulty] = useState(0)
	return (
		<div className={classes.savannah}>
			{isGame ? (
				<Game difficulty={difficulty} setGame={setGame} />
			) : (
				<Rules start={setGame} setDifficulty={setDifficulty} difficulty={difficulty}/>
			)}
		</div>
	)
}

Rules.propTypes = {
	start: PropTypes.func.isRequired,
}
