import React from 'react'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'
import StatisticsPageContainer from '@/components/Stats/containerStats'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPageContainer from '@/pages/RegistrationPageContainer'
import LoginPageContainer from '@/pages/LoginPageContainer'
import TestRequest from '@/pages/testRequest'
import ElectrobookPageContainer from '@/pages/ElectrobookPageContainer'
import AboutTeamPage from '@/pages/AboutTeamPage'
import Promo from './pages/Promo'

export default [
	{
		path: '/',
		// component: <HomePage />,
		component: <Promo />
	},
	{
		path: '/games',
		component: <GamesPage />,
	},
	{
		path: '/statistics',
		component: <StatisticsPageContainer />,
	},
	{
		path: '/electro-book',
		component: <ElectrobookPageContainer />,
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
		component: <AboutTeamPage />,
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
