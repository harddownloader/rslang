import React from 'react'
// core components
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'
import VacabularyContainer from '@/components/Vacabulary/VacabularyContainer'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	electrobook: {
		flexGrow: 1,
	},
}));

// Electro book
const Electrobook = (props) => {	
	const classes = useStyles();

	return (!props.userAuth.token) ? <Redirect to='/login' /> :
		(
			<>
				<Header />
				<Container>
					<div className={classes.electrobook}>
						<h1>Электронный учебник</h1>

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
