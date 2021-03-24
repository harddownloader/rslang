import React from 'react'

import Home from '@/pages/Home'
import GamesPage from '@/pages/GamesPage'
import Statistics from '@/pages/Statistics'

export default [
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/games',
		component: <GamesPage />,
	},
	{
		path: '/statistics',
		component: <Statistics />,
	},
	{
		path: '/vocabulary',
		component: <div></div>,
	},
	{
		path: '*',
		component: <div>error</div>,
	},
]
