import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import LinksItem from '@/utils/LinksItem'
import NavList from './NavList'

const useStyles = makeStyles(theme => ({
	root: {
		zIndex: styleProperties => (styleProperties.isActive ? 10 : '-10'),
		overflowY: 'auto',
		position: 'fixed',
		height: '100%',
		top: '6rem',
		left: 0,
		width: '100%',
		[theme.breakpoints.up('md')]: {
			top: 0,
			left: '6rem',
		},
	},
	linksBox: {
		height: '100%',
		color: '#fff',
		fontWeight: 400,
		lineHeight: 1.2,
		fontFamily: '"Vollkorn", serif',
		width: '100%',
		overflowX: 'hidden',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			width: 'calc(100% - 6rem)',
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
