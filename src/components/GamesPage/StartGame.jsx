import React from 'react'
import { useParams } from 'react-router-dom'
function StartGame() {
	// The <Route> that rendered this component has a
	// path of `/topics/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { id } = useParams()

	return (
		<div>
			<h3>{id}</h3>
		</div>
	)
}

export default StartGame
