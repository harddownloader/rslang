import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import RouterList from './RouterList'

const useStyles = makeStyles(theme => ({
	root: {
		overflow: 'hidden',
		height: '100vh',
		position: 'relative',
		width: '100%',
		paddingTop: '6rem',
		[theme.breakpoints.up('md')]: {
			paddingTop: '0',
			paddingLeft: '6rem',
		},
	},
}))

const App = () => {
	const classes = useStyles()
	const location = useLocation()
	return (
		<TransitionGroup className={classes.root}>
			<CSSTransition
				key={location.key}
				classNames='fade'
				mountOnEnter
				timeout={500}>
				<Switch location={location}>
					{RouterList.map((rout, index) => (
						<Route exact={rout.path === '/'} path={rout.path} key={index}>
							{rout.component}
						</Route>
					))}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default App
