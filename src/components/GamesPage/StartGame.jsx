import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Speaker from '@/components/SpeakerGame'

function StartGame({ name }) {
	// The <Route> that rendered this component has a
	// path of `/topics/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	const { id } = useParams()

	return id === 'savanna' ? (
		<p>1</p>
	) : id === 'sprint' ? (
		<p>2</p>
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
