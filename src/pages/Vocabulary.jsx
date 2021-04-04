import React from 'react'
// import axios from 'axios'
// core components
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'

const Vocabulary = () => {
	// const getSettings = axios
	// 	.get('https://rs-lang-app.herokuapp.com/users?id=605e40fd5747abe9af64b685')
	// 	.then(function (response) {
	// 		// handle success
	// 		console.log(response)
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error)
	// 	})
	// 	.then(function () {
	// 		// always executed
	// 	})

	return (
		<>
      <Header />
      <div className="vacablurary">
        <h5>Электронный учебник</h5>
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

export default Vocabulary
