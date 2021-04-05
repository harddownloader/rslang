import React from 'react'

// import Home from '@/pages/Home'
import ContainerHome from '@/ContainerHome'
import GamesPage from '@/pages/GamesPage'
import StatisticsPage from '@/pages/StatisticsPage'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPage from '@/pages/RegistrationPage'
import LoginPage from '@/pages/LoginPage'
// import TestComponentForGames from '@/pages/testForGames'
import VocabularyPage from '@/pages/VocabularyPage'
import AboutTeamPage from '@/pages/AboutTeamPage'

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
		component: <VocabularyPage />,
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
		component: <AboutTeamPage />
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
