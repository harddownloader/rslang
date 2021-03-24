import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route, useRouteMatch, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import StartGame from './StartGame'
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

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const Games = () => {
	const query = useQuery()
	const location = useLocation()
	const classes = useStyles()
	const { path } = useRouteMatch()
	const [hoverGame, setHoverGame] = useState(0)
	return (
		<TransitionGroup>
			{/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
			<CSSTransition key={location.key} classNames='fade' timeout={1000}>
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
						<StartGame name={query.get('name')} />
					</Route>
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Games
