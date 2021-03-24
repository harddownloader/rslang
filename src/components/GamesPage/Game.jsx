import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import colors from '@/utils/colors'
import { Link, useRouteMatch } from 'react-router-dom'
import { setBorder } from './eyeAnimation'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: '1 1 100%',
		position: 'relative',
		boxSizing: 'border-box',
		transition: 'all 0.5s',
		height: '25%',
		width: '100%',
		border: '0 solid #333',
		[theme.breakpoints.up('sm')]: {
			height: '50%',
			width: '50%',
			flex: '1 1 50%',
		},
		'&:hover': {
			borderTop: propertiesStyle => setBorder(0, 1, propertiesStyle.index),
			borderBottom: propertiesStyle => setBorder(2, 3, propertiesStyle.index),
			borderLeft: propertiesStyle => setBorder(0, 2, propertiesStyle.index),
			borderRight: propertiesStyle => setBorder(1, 3, propertiesStyle.index),
			'& h4': {
				color: colors.borderColor,
				background: 'rgba(0,0,0,0.5)',
			},
			'& h5': { color: '#fff' },
			'& img': {
				opacity: 0.8,
			},
		},
		background: propertiesStyle => propertiesStyle.bg,
		'& img': {
			transition: 'all 0.3s',
			position: 'absolute',
			top: 0,
			left: 0,
			opacity: 0.5,
			height: '100%',
			width: '100%',
			objectFit: 'cover',
		},
	},
	title: {
		padding: '0.5rem 0.5rem 0.5rem 1rem',
		borderRadius: 3,
		background: 'none',
		zIndex: 2,
		fontSize: '2.5rem',
		lineHeight: 1.2,
		color: colors.textLigth,
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
		'&:after': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			height: '4.2rem',
			width: 2,
			background: colors.borderColor,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '4rem',
		},
	},
}))

const Game = ({ setHoverGame, index, game }) => {
	const propertiesStyle = {
		bg: game.bg,
		index,
	}
	const classes = useStyles(propertiesStyle)

	const { url } = useRouteMatch()

	const HandlerMouse = () => {
		setHoverGame(index)
	}
	return (
		<>
			<Link
				style={{ textDecoration: 'none' }}
				to={`${url}/${game.path}?name=all`}
				className={classes.root}
				onMouseEnter={HandlerMouse}>
				<h4 className={classes.title}>{game.title}</h4>
				<img src={game.img} alt='img' />
			</Link>
		</>
	)
}

Game.propTypes = {
	game: PropTypes.object,
	setHoverGame: PropTypes.func,
	index: PropTypes.number,
}

export default Game
