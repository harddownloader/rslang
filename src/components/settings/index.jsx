import React from 'react'
import axios from 'axios'

const Settings = () => {
	const getSettings = axios
		.get('http://localhost:4000/users?id=605e40fd5747abe9af64b685')
		.then(function (response) {
			// handle success
			console.log(response)
		})
		.catch(function (error) {
			// handle error
			console.log(error)
		})
		.then(function () {
			// always executed
		})

	return (
		<>
			<p>Settings Page Component</p>
		</>
	)
}

export default Settings
