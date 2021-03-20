import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@/utils/colors'
import HeaderBurger from './HeaderBurger'

const useStyles = makeStyles(theme => ({
	root: {
		outline: 'none',
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
		height: '100%',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'column',
			alignItems: 'space-between',
		},
	},
}))

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles()
	return (
		<header className={classes.root}>
			<div className={classes.headerBar}>
				<div>loogo</div>
				<HeaderBurger isActive={isActive} setIsActive={setIsActive} />
			</div>
		</header>
	)
}
export default Header
