import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'

// assets
import imgSecret from '@/assets/images/gamesPage/folder.png'

// components
import Snackbar from './Snackbar'
//----------------------------------------

const useStyles = makeStyles(theme => ({
	img: {
		height: '6rem',
		width: '6rem',
		padding: 10,
		borderRadius: '50%',
		border: '1px solid #f6ea09',
		background: '#28282a',
	},
	imgSecret: {
		cursor: 'pointer',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: propertiesStyle =>
			`scale(${propertiesStyle.isPrompt ? 0 : 1}) translate(-50%,-50%)`,
		transition: 'all 1s',
		transformOrigin: '0% 0%',
	},
	promptImg: {
		height: '100%',
		width: '100%',
		objectFit: 'contain',
		transformOrigin: 'center',
		transform: propertiesStyle => `scale(${propertiesStyle.isPrompt ? 1 : 0})`,
		transition: 'all 1s',
	},
	promptBox: {
		[theme.breakpoints.up('md')]: { height: '100%', width: '40%' },
		position: 'relative',
		width: '100%',
		height: '40%',
		border: '2px solid #f6ea09',
		borderRadius: 5,
		background: '#696c70',
	},
	SnackbarContent: {
		display: 'flex',
		overflowY: 'auto',
		flexDirection: 'column',
		alignItems: 'start',
		overflow: 'hidden',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
}))

const PromptBox = ({ data, isOpenPrompt }) => {
	const [isPrompt, setIsPrompt] = useState(isOpenPrompt)
	const propertiesStyle = {
		isPrompt,
		isOpenPrompt,
	}
	const classes = useStyles(propertiesStyle)

	const handlerClick = () => {
		setIsPrompt(!isPrompt)
	}

	useEffect(() => {
		setIsPrompt(isOpenPrompt)
	}, [isOpenPrompt])

	return (
		<div className={classes.promptBox}>
			<div className={classes.SnackbarContent}>
				<Snackbar
					message={`${data.word} ${data.transcription} - ${data.wordTranslate}`}
					transform={['0', '-150%']}
					isOpenPrompt={isOpenPrompt}
				/>
				<Snackbar
					message={`${data.textMeaning} - ${data.textMeaningTranslate}`.replace(
						/<[^>]*>/g,
						'',
					)}
					transform={['400%', '0']}
					isOpenPrompt={isOpenPrompt}
				/>
				<Snackbar
					message={`${data.textExample} - ${data.textExampleTranslate}`.replace(
						/<[^>]*>/g,
						'',
					)}
					transform={['-150%', '0']}
					isOpenPrompt={isOpenPrompt}
				/>
			</div>
			{isPrompt && (
				<img
					className={classes.promptImg}
					src={`https://rs-lang-app.herokuapp.com/${data.image}`}
					alt='viiii'
				/>
			)}
			<img
				onClick={handlerClick}
				className={`${classes.imgSecret} ${classes.img}`}
				src={imgSecret}
				alt='imgSecret'
			/>
		</div>
	)
}

PromptBox.propTypes = {
	data: PropTypes.object,
	isOpenPrompt: PropTypes.bool,
}

export default PromptBox
