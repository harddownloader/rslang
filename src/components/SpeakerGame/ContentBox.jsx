import React, { useState } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// assets
import imgMegaphone from '@/assets/images/gamesPage/megaphone.png'

// components
import Form from './Form'
//----------------------------------------

const useStyles = makeStyles(theme => ({
	content: {
		[theme.breakpoints.up('md')]: { width: '60%', height: '100%' },
		display: 'flex',
		width: '100%',
		height: '60%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	imgMegaphoneBox: {
		[theme.breakpoints.up('md')]: {},
	},
	img: {
		cursor: 'pointer',
		height: '6rem',
		width: '6rem',
		padding: 10,
		borderRadius: '50%',
		border: '1px solid #f6ea09',
		background: '#28282a',
	},
	navBox: {
		position: 'absolute',
		top: 10,
		left: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.up('md')]: { bottom: 10, top: 'auto' },
	},
}))

const ContentBox = ({ data, swiper, setIsOpenPrompt }) => {
	const volume = new Audio(`https://rs-lang-app.herokuapp.com/${data.audio}`)
	const classes = useStyles()

	return (
		<div className={classes.content}>
			<div className={classes.imgMegaphoneBox} onClick={() => volume.play()}>
				<img className={classes.img} src={imgMegaphone} alt='imgMegaphone' />
			</div>
			<Form data={data} setIsOpenPrompt={setIsOpenPrompt} />
			<div className={classes.navBox}>
				<Button
					onClick={() => swiper.slidePrev()}
					variant='contained'
					size='large'
					color='secondary'
					className={classes.nav}>
					Prev
				</Button>
				<Button
					onClick={() => swiper.slideNext()}
					variant='contained'
					size='large'
					color='primary'
					className={classes.nav}>
					Next
				</Button>
			</div>
		</div>
	)
}

ContentBox.propTypes = {
	data: PropTypes.object,
	swiper: PropTypes.object,
	setIsOpenPrompt: PropTypes.func,
}

export default ContentBox
