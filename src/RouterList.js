import React from 'react'

// import Home from '@/pages/Home'
import ContainerHome from '@/ContainerHome'
import GamesPage from '@/pages/GamesPage'
import StatisticsPage from '@/pages/StatisticsPage'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPage from '@/pages/RegistrationPage'
import LoginPage from '@/pages/LoginPage'
// import TestComponentForGames from '@/pages/testForGames'
import Vocabulary from '@/pages/Vocabulary'
import AbouTeam from '@/pages/AboutTeam'

export default [
	{
		path: '/',
		// component: <Home />,
		component: <ContainerHome />
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
		path: '/vocabulary',
		component: <Vocabulary />,
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
		path: '/about-team',
		component: <AbouTeam />
	}
	// {
	// 	path: '/test',
	// 	component: <TestComponentForGames />,
	// },
	// {
	// 	path: '*',
	// 	component: <div>error</div>,
	// },
]
