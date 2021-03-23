import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import LinksItem from './LinksItem'
import NavList from './NavList'

const useStyles = makeStyles(theme => ({
	root: {
		overflowY: 'auto',
		position: 'fixed',
		height: '100%',
		top: '6rem',
		left: 0,
		transitionDelay: styleProperties =>
			styleProperties.isActive ? '0s' : '0.5s',
		width: styleProperties => (styleProperties.isActive ? '100%' : '0'),
		[theme.breakpoints.up('md')]: {
			top: 0,
			left: '6rem',
		},
	},

	linksBox: {
		color: '#fff',
		fontWeight: 400,
		lineHeight: 1.2,
		fontFamily: '"Vollkorn", serif',
		width: '100%',
		overflowX: 'hidden',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		height: 'calc(100% - 6rem)',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			width: 'calc(100% - 6rem)',
			height: '100%',
		},
	},
}))

const NavBar = ({ isActive }) => {
	const styleProperties = {
		isActive,
	}
	const classes = useStyles(styleProperties)

	return (
		<nav className={classes.root}>
			<ul className={classes.linksBox}>
				{LinksItem.map((element, index) => {
					return (
						<React.Fragment key={element.bg}>
							<NavList
								isActive={isActive}
								style={{ bg: element.bg, delay: index }}
								title={element.title}
								subtitle={element.subtitle}
								path={element.path}
								image={element.img}
							/>
						</React.Fragment>
					)
				})}
			</ul>
		</nav>
	)
}
NavBar.propTypes = {
	isActive: PropTypes.bool.isRequired,
}
export default NavBar
