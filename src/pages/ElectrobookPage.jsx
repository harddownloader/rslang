import React from 'react'
// import axios from 'axios'
// core components
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'
import Vacabulary from '@/components/Vacabulary'

// Electro book
const Electrobook = () => {

	return (
		<>
			<Header />
			<div className='electrobook'>
				<h5>Электронный учебник</h5>
				<Vacabulary/>
				<p>страницы и разделы учебника</p>
				<p>настройки</p>
				<p>список слов</p>
				<p>навигация по страницам и разделам учебника</p>

				<h5>Словарь</h5>
				<p>раздел "Изучаемые слова"</p>
				<p>раздел "Сложные слова"</p>
				<p>раздел "Удалённые слова"</p>
			</div>
			<Footer />
		</>
	)
}

export default Electrobook
