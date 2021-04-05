import React from 'react'

export default function Result(properties) {
	const color = properties.result ? 'red' : 'yellow'

	return (
		<div style={{ color, fontWeight: 'bold' }}>
			{properties.result ? 'INCORRECT' : 'CORRECT'}
		</div>
	)
}
