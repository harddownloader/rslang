import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import colors from '@/utils/colors'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '25%',
		cursor: 'pointer',
		width: '100%',
		margin: '-1px',
		//	padding: '3rem 1rem 0 1rem',
		zIndex: linkStyle => 10 - linkStyle.delay,
		transition: 'all .75s cubic-bezier(.34,1,.34,1) ',
		fontSize: '2.8rem',

		background: linkStyle => linkStyle.background,
		transformOrigin: 'left',
		transform: linkStyle =>
			linkStyle.isActive
				? 'translateX(0)'
				: `translateX(-${linkStyle.delay + 1}00%)`,
		transitionDelay: linkStyle => `0.${linkStyle.delay}s`,
		[theme.breakpoints.up('md')]: {
			height: '50%',
			width: '50%',
			fontSize: '4rem',
		},
		'&:hover': {
			transform: 'scaleX(0.98)',
			'& h4': { color: colors.borderColor },
			'& h5': { color: '#fff' },
		},
	},
	titleWrapper: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'cener',
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
	subtitle: {
		margin: 0,
		transition: 'color 0.7s ease',
		color: '#333',
		fontWeight: 300,
		[theme.breakpoints.up('md')]: {
			fontSize: '2rem',
		},
		fontSize: '1.5rem',
	},
	imgBox: {
		overflow: 'hidden',
		height: 'calc(100% - 2px)',
		width: '50%',
		'& img': {
			transition: 'all 1.5s cubic-bezier(.34,1,.34,1) ',
			transitionDelay: linkStyle => `0.${linkStyle.delay}s`,
			transform: linkStyle =>
				linkStyle.isActive ? 'translateX(0)' : 'translateX(100%)',
			objectFit: 'cover',
			height: '100%',
			width: '100%',
		},
	},
}))

const NavList = ({ isActive, style, title, subtitle, image }) => {
	const linkStyle = {
		delay: style.delay,
		background: style.bg,
		isActive,
	}

	const classes = useStyles(linkStyle)
	
	return (
		<>
			<li className={classes.root}>
				<div className={classes.titleWrapper}>
					<h4 className={classes.title}>{title}</h4>
					<h5 className={classes.subtitle}>{subtitle}</h5>
				</div>
				<div className={classes.imgBox}>
					<img src={image} alt='ico' />
				</div>
			</li>
		</>
	)
}

NavList.propTypes = {
	isActive: PropTypes.bool.isRequired,
	style: PropTypes.object,
	patch: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string,
}

export default NavList
