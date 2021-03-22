import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Home from '@/pages/Home'
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

const App = () => {
	const classes = useStyles()
	return (
		<Router>
			<CssBaseline />
			<div className={classes.root}>
				<Switch>
					{/* main */}
					<Route exact path='/'>
						<Home />
					</Route>
					{/* games */}
					<Route path='/games'>
						<Home />
					</Route>
					{/* stat */}
					<Route path='/statistics'>
						<Statistics />
					</Route>
					{/* book */}
					<Route path='/vocabulary'>
						<Home />
					</Route>
					{/* out */}
					<Route path='*'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
