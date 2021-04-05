import React from 'react'

import Header from '@/components/header'

const Home = (props) => {
	return (
		<>
			<Header />
			<button onClick={event => props.addName('Sera')}>clIck</button>
		</>
	)
}

export default Home
