import React from 'react'

import Header from '@/components/header'

const Home = properties => {
	return (
		<>
			<Header />
			<button onClick={event => properties.addName('Sera')}>clIck</button>
		</>
	)
}

export default Home
