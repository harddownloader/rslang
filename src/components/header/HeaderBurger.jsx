import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@/utils/colors'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	headerBurger: {
		cursor: 'pointer',
		position: 'relative',
		width: '6rem',
		height: '6rem',
		background: colors.headerBurger,
		'&:before, &:after, span': {
			background: '#fff',
			position: 'absolute',
			top: '50%',
			left: '30%',
			right: '30%',
			height: '2px',
			marginTop: '-1',
			transition: 'all .3s linear',
		},

		'&:before': {
			content: '""',
			top: '41%',
		},
		'&:after': {
			content: '""',
			top: '58%',
		},
	},
	headerBurgerActive: {
		'&:before,&:after': {
			top: '50%',
			left: '27%',
			right: '27%',
		},
		'&:after': {
			transform: 'rotate(-45deg)',
		},
		'&:before': {
			transform: 'rotate(45deg)',
		},
		' & span': {
			opacity: 0,
		},
	},
})

const HeaderBurger = ({ isActive, setIsActive }) => {
	const classes = useStyles()

	return (
		<div
			onPointerDown={() => setIsActive(!isActive)}
			className={`${classes.headerBurger} ${
				isActive && classes.headerBurgerActive
			}`}>
			<span></span>
		</div>
	)
}
HeaderBurger.propTypes = {
	isActive: PropTypes.bool.isRequired,
	setIsActive: PropTypes.func.isRequired,
}

export default HeaderBurger
