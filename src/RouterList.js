import React from 'react'

import Home from '@/pages/Home'
import Games from '@/pages/Games'
// import Statistics from '@/pages/Statistics'

export default [
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/games',
		component: <Games />,
	},
	// {
	// 	path: '/statistics',
	// 	component: <Statistics />,
	// },
	{
		path: '/vocabulary',
		component: <div></div>,
	},
	{
		path: '*',
		component: <div></div>,
	},
]
