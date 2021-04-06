import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Speaker from '@/components/SpeakerGame'
import Savannah from '@/components/savannah/Savannah'
import Sprint from '@/components/Sprint/Sprint'

function StartGame({ name }) {
	// The <Route> that rendered this component has a
	// path of `/topics/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	const { id } = useParams()

	return id === 'savanna' ? (
		<Savannah />
	) : id === 'sprint' ? (
		<Sprint />
	) : id === 'speaker' ? (
		<Speaker query={name} />
	) : (
		<p>4</p>
	)
}

StartGame.propTypes = {
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
}

export default StartGame
