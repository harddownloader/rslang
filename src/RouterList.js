import React from 'react'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'
import StatisticsPage from '@/pages/StatisticsPage'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPageContainer from '@/pages/RegistrationPageContainer'
import LoginPageContainer from '@/pages/LoginPageContainer'
import TestRequest from '@/pages/testRequest'
import ElectrobookPage from '@/pages/ElectrobookPage'
import AboutTeamPage from '@/pages/AboutTeamPage'

export default [
	{
		path: '/',
		component: <HomePage />,
	},
	{
		path: '/games',
		component: <GamesPage />,
	},
	{
		path: '/statistics',
		component: <StatisticsPage />,
	},
	{
		path: '/electro-book',
		component: <ElectrobookPage />,
	},
	{
		path: '/settings',
		component: <SettingsPage />,
	},
	{
		path: '/login',
		component: <LoginPageContainer />,
	},
	{
		path: '/registration',
		component: <RegistrationPageContainer />,
	},
	{
		path: '/about-team',
		component: <AboutTeamPage />
	},
	{
		path: '/test',
		component: <TestRequest />,
	},
	// {
	// 	path: '*',
	// 	component: <div>error</div>,
	// },
]
