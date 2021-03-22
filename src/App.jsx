import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Home from '@/pages/Home'
import Games from '@/pages/Games'
import Statistics from '@/pages/Statistics'

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		position: 'relative',
		width: '100%',
		paddingTop: '6rem',
		[theme.breakpoints.up('md')]: {
			paddingTop: '0',
			paddingLeft: '6rem',
		},
	},
}))

const routers = [
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/games',
		component: <Games />,
	},
	{
		path: '/statistics',
		component: <Statistics />,
	},
	{
		path: '/vocabulary',
		component: <div></div>,
	},
	{
		path: '*',
		component: <div></div>,
	},
]

const App = () => {
	const classes = useStyles()
	return (
		<Router>
			<CssBaseline />
			<div className={classes.root}>
				<Switch>
					{routers.map((rout, index) => (
						<Route exact path={rout.path} key={index}>
							{rout.component}
						</Route>
					))}
				</Switch>
			</div>
		</Router>
	)
}

export default App
