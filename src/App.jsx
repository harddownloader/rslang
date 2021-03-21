import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Home from '@/pages/Home'

const useStyles = makeStyles(() => ({
	root: {
		minHeight: '100vh',
		position: 'relative',
		width: '100vw',
	},
}))

const App = () => {
	const classes = useStyles()
	return (
		<Router>
			<CssBaseline />
			<Container maxWidth='lg' className={classes.root}>
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
						<Home />
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
			</Container>
		</Router>
	)
}

export default App
