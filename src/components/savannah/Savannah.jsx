import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Rules from './Rules'
import Game from './Game'

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

function randomRange(range) {
	return Math.floor(Math.random() * range)
}

export default function Savannah() {
	const classes = useStyles()
	const [isGame, setGame] = useState(false)
	const [difficulty, setDifficulty] = useState(0)
	return (
		<div className={classes.savannah}>
			{isGame ? <Game difficulty={difficulty} /> : <Rules start={setGame} />}
		</div>
	)
}

export { randomRange }

Rules.propTypes = {
	start: PropTypes.func.isRequired,
}
