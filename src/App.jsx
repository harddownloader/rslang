import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Header from '@/components/header'

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
		<>
			<CssBaseline />
			<Container maxWidth='lg' className={classes.root}>
				<Header />
			</Container>
		</>
	)
}

export default App
