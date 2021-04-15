import React from 'react'
// import axios from 'axios'
// core components
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'
import VacabularyContainer from '@/components/Vacabulary/VacabularyContainer'

// Electro book
const Electrobook = () => {

	return (
		<>
			<Header />
			<div className='electrobook'>
				<h1>Электронный учебник</h1>
				<VacabularyContainer />
				<p>страницы и разделы учебника</p>
				<p>настройки</p>
				<p>список слов</p>
				<p>навигация по страницам и разделам учебника</p>
			</div>
			<Footer />
		</>
	)
}

export default Electrobook