import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route, useRouteMatch, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import StartGameContainer from './StartGameContainer'
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
	animation: {
		overflow: 'hidden',
		height: 'calc(100vh - 6rem)',
		[theme.breakpoints.up('md')]: {
			height: '100vh',
		},
		'& .fade-enter': {
			opacity: '0.5',
			transition: 'all 0.5s ease-in',
			transform: 'translateY(100%)',
		},
		'& .fade-enter-active': {
			opacity: 1,
			transform: 'translateY(0%)',
		},
		'& .fade-exit': {
			opacity: 1,
			transform: 'translateY(-100%)',
		},
		'& .fade-exit-active': {
			transform: 'translateY(0%)',
			opacity: '0',
			transition: 'all 0.5s ease-in',
		},
	},
}))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const Games = () => {
	// useEffect(() => {

	// }, [])

	const query = useQuery()
	const location = useLocation()
	const classes = useStyles()
	const { path } = useRouteMatch()
	const [hoverGame, setHoverGame] = useState(0)

	return (
		<TransitionGroup className={classes.animation}>
			<CSSTransition
				key={location.key}
				classNames='fade'
				//	mountOnEnter
				timeout={500}>
				<Switch location={location}>
					<Route exact path={path}>
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
					</Route>
					<Route path={`${path}/:id`}>
						<StartGameContainer name={query.get('name')} />
					</Route>
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Games
