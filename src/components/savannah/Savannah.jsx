import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
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

export default function Savannah(props) {
	const classes = useStyles()
	const [isGame, setGame] = useState(false)
	const [difficulty, setDifficulty] = useState(0)
	// if (props.userAuth.token === 'tokeN') return <Redirect to='/login' />
	return (
		<div className={classes.savannah}>
			{isGame ? (
				<Game difficulty={difficulty} userAuth={props.userAuth} setGame={setGame} />
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

Rules.propTypes = {
	start: PropTypes.func.isRequired,
}
