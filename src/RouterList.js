import React from 'react'

import Home from '@/pages/Home'
import GamesPage from '@/pages/GamesPage'
import Statistics from '@/pages/Statistics'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPage from '@/pages/RegistrationPage'
import LoginPage from '@/pages/LoginPage'
import TestComponentForGames from '@/pages/testForGames'

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
		path: '/settings',
		component: <SettingsPage />,
	},
	{
		path: '/login',
		component: <LoginPage />,
	},
	{
		path: '/registration',
		component: <RegistrationPage />,
	},
	{
		path: '/test',
		component: <TestComponentForGames />,
	},
	{
		path: '*',
		component: <div>error</div>,
	},
]
