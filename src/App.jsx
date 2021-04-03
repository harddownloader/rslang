import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import RouterList from './RouterList'

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


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#393838',
//     },
//     secondary: {
//       main: '#f6ea09',
//     },
//   },
// });


const hist = createBrowserHistory()

const App = () => {
	const classes = useStyles()
	return (
		// <ThemeProvider theme={theme}>
			<Router history={hist}>
				<CssBaseline />
				<div className={classes.root}>
					<Switch>
						{RouterList.map((route, index) => (
							<Route exact={route.path === '/'} path={route.path} key={index}>
								{route.component}
							</Route>
						))}
					</Switch>
				</div>
			</Router>
		// </ThemeProvider>
	)
}

export default App
