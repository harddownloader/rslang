import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@/utils/colors'

import HeaderBurger from './HeaderBurger'
import NavBar from './NavBar'
import Title from './Title'
import Logo from './Logo'

const useStyles = makeStyles(theme => ({
	root: {
		zIndex: 100,
		background: colors.header,
		position: 'fixed',
		height: '6rem',
		top: 0,
		left: 0,
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '6rem',
			height: '100%',
		},
	},
	headerBar: {
		color: '#fff',
		height: '100%',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'column',
			alignItems: 'space-between',
		},
	},
	title: {
		'&:hover': {
			color: colors.borderColor,
		},
		[theme.breakpoints.up('md')]: {
			transform: 'rotate(-90deg)',
		},
	},
}))

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles()
	return (
		<header className={classes.root}>
			<div className={classes.headerBar}>
				<Logo />
				<Title />
				<HeaderBurger isActive={isActive} setIsActive={setIsActive} />
				<NavBar isActive={isActive} setIsActive={setIsActive} />
			</div>
		</header>
	)
}

export default Header
