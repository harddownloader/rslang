import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import colors from '@/utils/colors'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		margin: '-1px',
		padding: '3rem 1rem 0 1rem',
		minHeight: 150,
		zIndex: linkStyle => 10 - linkStyle.delay,
		transition: 'all .75s cubic-bezier(.34,1,.34,1) ',
		fontSize: '3.2rem',
		background: linkStyle => linkStyle.background,
		transformOrigin: 'left',
		transform: linkStyle =>
			linkStyle.isActive
				? 'translateX(0)'
				: `translateX(-${linkStyle.delay + 1}00%)`,
		transitionDelay: linkStyle => `0.${linkStyle.delay}s`,
		[theme.breakpoints.up('md')]: {
			width: '50%',
			fontSize: '4rem',
			'&:hover': {
				transform: 'scale(0.98)',
			},
		},
		'&:hover': {
			transform: 'scaleX(0.98)',
			'& h4': { color: colors.borderColor },
		},
	},
	title: {
		position: 'relative',
		'&:before': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			height: 2,
			width: '6.2rem',
			background: colors.borderColor,
		},
	},
}))

const NavList = ({ isActive, style }) => {
	const linkStyle = {
		delay: style.delay,
		background: style.bg,
		isActive,
	}
	const classes = useStyles(linkStyle)
	return (
		<>
			<li className={classes.root}>
				<h4 className={classes.title}>title</h4>
			</li>
		</>
	)
}
NavList.propTypes = {
	isActive: PropTypes.bool.isRequired,
	style: PropTypes.object,
}
export default NavList
