import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import gamesItem from './gamesItem'
import Game from './Game'
import Eye from './Eye'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		height: 'calc(100vh - 6rem)',
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('md')]: {
			height: '100vh',
		},
	},
}))

const Games = () => {
	const classes = useStyles()
	const [hoverGame, setHoverGame] = useState(0)
	return (
		<>
			<div className={classes.root}>
				<Eye setHoverGame={setHoverGame} hoverGame={hoverGame} />
				{gamesItem.map((game, index) => (
					<Game
						game={game}
						setHoverGame={setHoverGame}
						index={index}
						key={game.title}
					/>
				))}
			</div>
		</>
	)
}

export default Games
