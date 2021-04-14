import React, { useState } from 'react'
import PropTypes from 'prop-types'

// components
import PromptBox from './PromptBox'
import ContentBox from './ContentBox'
// ----------------------------------------

const Slide = ({ data, swiper }) => {
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
			/>
		</>
	)
}

Slide.propTypes = {
	data: PropTypes.object,
	swiper: PropTypes.object,
}

export default Slide
