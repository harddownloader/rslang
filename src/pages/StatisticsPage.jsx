import React from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
// import { makeStyles } from '@material-ui/core/styles'
// import Header from '@/components/header'
import Statistics from '@/components/Stats/Stats'
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'

const StatisticsPage = () => {
	// const classes = useStyles()
	return (
		<>
			<Header />
			<Statistics />
			<Footer whiteFont />
		</>
	)
}

export default StatisticsPage
