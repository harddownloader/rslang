import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route, useLocation, useRouteMatch } from 'react-router-dom'
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
	const { url } = useRouteMatch()
	const [hoverGame, setHoverGame] = useState(0)
	const location = useLocation()
	console.log(location)
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
			{gamesItem.map(game => (
				<Route key={game.title} exact path={`${url}/${game.path}`}>
					<div> sdhoojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
				</Route>
			))}
		</>
	)
}

export default Games
