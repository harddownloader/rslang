import React, { useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

// router
import { Redirect } from 'react-router-dom'

// material
import { makeStyles } from '@material-ui/core/styles'

// dataApihook
import useDataApi from '@/utils/useDataApi'

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

// Api
import { getAggregatedWords } from '@/utils/apiRequests/aggregatedWords'
import { getUserWords } from '@/utils/apiRequests/userWords'

// components
import Loader from '@/components/savannah/Loader'
import Slide from './Slide'
import LvlControl from './LvlControl'
import { Context } from './Context'
import StatisticReducer from './StatisticReducer'
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
	loader: {
		height: '100%',
		width: '100%',
		display: 'flex',
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

const Speaker = ({ query, userToken, userId }) => {
	const [swiper, setSwiper] = useState(null) // eslint-disable-line  unicorn/no-null
	const [lvl, setLvl] = useState(query)
	const classes = useStyles()

	const [{ data, isLoading, isError }, doFetch] = useDataApi(
		getAggregatedWords,
		[userId, userToken, lvl, false, 10],
		[],
	)
	useEffect(() => {
		doFetch(getAggregatedWords, [userId, userToken, lvl], [])
	}, [lvl, setLvl])
	const [statistic, dispatchStatistic] = useReducer(StatisticReducer, {
		currentAnswer: 0,
		errorAnswer: 0,
		series: 0,
		bestSeries: 0,
		exp: 0,
		answer: 0,
	})
	if (!userId) {
		return <Redirect to='/login' />
	}
	if (isError) {
		return <div>Something went wrong ...</div>
	}
	if (isLoading) {
		return (
			<div className={classes.loader}>
				<Loader />
			</div>
		)
	}
	return (
		<Context.Provider
			value={{
				userId,
				userToken,
				contextStatistic: [statistic, dispatchStatistic],
			}}>
			<div className={classes.root}>
				<LvlControl setLvl={setLvl} lvl={lvl} />
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
			</div>
		</Context.Provider>
	)
}

Speaker.propTypes = {
	query: PropTypes.string,
	userToken: PropTypes.string,
	userId: PropTypes.string,
}

export default Speaker
