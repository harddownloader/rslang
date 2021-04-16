import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { secondaryColor } from '@/assets/jss/materialKitReact'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
		colorSecondary: '#f8ee3a',
	},
}))
const innerTheme = createMuiTheme({
	palette: {
		secondary: {
			main: '#f8ee3a',
		},
	},
})

export default function Loader() {
	const classes = useStyles()
	return (
		<ThemeProvider theme={innerTheme}>
			<div className={classes.root}>
				<LinearProgress color='secondary' />
			</div>
		</ThemeProvider>
	)
}
