import React from 'react'

import colors from '@/utils/colors'
import savanaImg from '@/assets/images/gamesPage/savana.jpg'
import sprintImg from '@/assets/images/gamesPage/sprint.jpg'
import speakerImg from '@/assets/images/gamesPage/speaker.jpg'
import testGame from '@/assets/images/gamesPage/testGame.jpg'

export default [
	{
		path: 'savanna',
		bg: colors.boxA,
		title: 'Savanna',
		subtitle: 'Саванна',
		img: savanaImg,
		component: (
			<div
				style={{
					height: 700,
					width: 700,
					position: 'absolute',
					top: '40%',
					left: '40%',
					background: 'red',
					zIndex: 20,
				}}>
				4
			</div>
		),
	},
	{
		path: 'sprint',
		bg: colors.boxB,
		title: 'Sprint',
		subtitle: 'Спринт',
		img: sprintImg,
		component: <div>3</div>,
	},
	{
		path: 'speaker',
		bg: colors.boxC,
		title: 'Speaker',
		subtitle: 'Аудиовызов',
		img: speakerImg,
		component: <div>2</div>,
	},
	{
		path: 'myGame',
		bg: colors.boxD,
		title: 'My little game',
		subtitle: 'моя маленькая игра',
		img: testGame,
		component: <div>1</div>,
	},
]
