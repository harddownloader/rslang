import React from 'react'

// import Home from '@/pages/Home'
import ContainerHome from '@/ContainerHome'
import GamesPage from '@/pages/GamesPage'
import StatisticsPage from '@/pages/StatisticsPage'
import SettingsPage from '@/pages/SettingsPage'
import RegistrationPageContainer from '@/pages/RegistrationPageContainer'
import LoginPageContainer from '@/pages/LoginPageContainer'
import TestRequest from '@/pages/testRequest'
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
