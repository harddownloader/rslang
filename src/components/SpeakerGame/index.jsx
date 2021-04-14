import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import useDataApi from '@/utils/useDataApi'
import Button from '@material-ui/core/Button'

// swiper
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCube,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

// components
import Slide from './Slide'
import LvlControl from './LvlControl'
//----------------------------------------

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCube, A11y])

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		flexDirection: 'column',
	},
	swiper: {
		borderRadius: 5,
		height: '80%',
		width: '80%',
		'& .swiper-scrollbar-drag': {
			background: '#fafafa',
		},
	},

	slide: {
		height: '100%',
		background: '#363538',
		borderRadius: 5,
		flexDirection: 'column-reverse',
		display: 'flex',
		[theme.breakpoints.up('md')]: { flexDirection: 'row' },
	},
	nav: {
		margin: theme.spacing(1),
		position: 'absolute',
		top: '50%',
		left: '0',
		zIndex: 10,
	},
}))

const Speaker = ({ query, userAuth }) => {
	console.log('userAuth', {token: userAuth.token, userId: userAuth.userId})
	const [swiper, setSwiper] = useState(null)
	const [lvl, setLvl] = useState(query)

	const classes = useStyles()
	const [
		{ data, isLoading, isError },
		doFetch, // eslint-disable-line no-unused-vars
	] = useDataApi(`https://rs-lang-app.herokuapp.com/words?group=${lvl}`, [])

	useEffect(() => {
		doFetch(`https://rs-lang-app.herokuapp.com/words?group=${lvl}`)
	}, [lvl, setLvl])

	return (
		<>
			<div className={classes.root}>
				{isError && <div>Something went wrong ...</div>}
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					<>
						<LvlControl setLvl={setLvl} />
						<Swiper
							onSwiper={setSwiper}
							simulateTouch={false}
							scrollbar
							effect='cube'
							cubeEffect={{
								shadow: true,
								slideShadows: true,
								shadowOffset: 20,
								shadowScale: 0.94,
							}}
							className={classes.swiper}>
							{data.map(item => (
								<SwiperSlide className={classes.slide} key={item.word}>
									<Slide data={item} swiper={swiper} />
								</SwiperSlide>
							))}
						</Swiper>
					</>
				)}
			</div>
		</>
	)
}

Speaker.propTypes = {
	query: PropTypes.string,
}

export default Speaker
