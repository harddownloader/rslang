import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
	root: {
		zIndex: linkStyle => 10 - linkStyle.delay,
		transition: 'all .75s cubic-bezier(.34,1,.34,1) ',
		fontSize: '4rem',
		padding: '1rem 3rem 0 3rem',
		background: linkStyle => linkStyle.background,
		transformOrigin: 'left',
		transform: linkStyle =>
			linkStyle.isActive
				? 'translateX(0)'
				: `translateX(-${linkStyle.delay + 1}00%)`,
		transitionDelay: linkStyle => `0.${linkStyle.delay}s`,
	},
}))

const NavList = ({ isActive, setIsActive, style }) => {
	const linkStyle = {
		delay: style.delay,
		background: style.bg,
		isActive,
	}
	const classes = useStyles(linkStyle)
	return (
		<>
			<li className={classes.root}>dldlldlddlldlddldl llflflflfl</li>
		</>
	)
}
NavList.propTypes = {
	isActive: PropTypes.bool.isRequired,
	setIsActive: PropTypes.func,
	style: PropTypes.object,
}
export default NavList
