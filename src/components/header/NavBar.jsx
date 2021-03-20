import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import LinksItem from '@/utils/LinksItem'
import NavList from './NavList'

const useStyles = makeStyles(theme => ({
	root: {
		zIndex: 10,
		position: 'fixed',
		height: '100%',
		top: 0,
		left: 0,
		width: '100%',
		marginTop: '6rem',
		[theme.breakpoints.up('md')]: {
			marginTop: 0,
			marginLeft: '6rem',
		},
	},
	linksBox: {
		width: '100%',
		overflowX: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
}))
const NavBar = ({ isActive, setIsActive }) => {
	const classes = useStyles()
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
	setIsActive: PropTypes.func,
}
export default NavBar
