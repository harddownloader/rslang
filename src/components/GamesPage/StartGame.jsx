import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function StartGame({ name }) {
	// The <Route> that rendered this component has a
	// path of `/topics/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	const { id } = useParams()

	return (
		<div>
			<h3
				style={{
					height: '100vh',
					background: 'blue',
				}}>
				{id} and {name}
			</h3>
		</div>
	)
}

StartGame.propTypes = {
	name: PropTypes.sring,
}

export default StartGame
