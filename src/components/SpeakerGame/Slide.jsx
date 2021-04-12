import React, { useState } from 'react'
import PropTypes from 'prop-types'

// components
import PromptBox from './PromptBox'
import ContentBox from './ContentBox'
// ----------------------------------------

const Slide = ({ data, swiper, currentArray }) => {
	const [isOpenPrompt, setIsOpenPrompt] = useState(false)
	return (
		<>
			<PromptBox
				data={data}
				isOpenPrompt={isOpenPrompt}
				setIsOpenPrompt={setIsOpenPrompt}
			/>
			<ContentBox
				data={data}
				swiper={swiper}
				setIsOpenPrompt={setIsOpenPrompt}
				currentArray={currentArray}
			/>
		</>
	)
}

Slide.propTypes = {
	data: PropTypes.object,
	swiper: PropTypes.object,
	currentArray: PropTypes.array,
}

export default Slide
