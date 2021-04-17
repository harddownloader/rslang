import React from 'react'
// import axios from 'axios'
// core components\
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'
import VacabularyContainer from '@/components/Vacabulary/VacabularyContainer'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	electrobook: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

// Electro book
const Electrobook = (props) => {
	// console.log('electrobook props', props)
	
	const classes = useStyles();

	const sections = []
	for(let i=0; i<6; i++) {
		sections.push(
			<Grid item xs={4} md={4} lg={4} key={i}>
				<Paper className={classes.paper}>{i+1}</Paper>
			</Grid>
		)
	}

	return (!props.userAuth.token) ? <Redirect to='/login' /> :
		(
			<>
				<Header />
				<Container>
					<div className={classes.electrobook}>
						<h1>Электронный учебник</h1>

						<Grid container spacing={1}>
							{sections}
						</Grid>

						<VacabularyContainer />
						<p>страницы и разделы учебника</p>
						<p>настройки</p>
						<p>список слов</p>
						<p>навигация по страницам и разделам учебника</p>
					</div>
					<Footer />
				</Container>
			</>
		)
}

export default Electrobook
