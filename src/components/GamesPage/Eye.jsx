import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import EyeImg from '@/assets/images/gamesPage/eye.svg'
import { moveEye } from './eyeAnimation'
import { primaryColor } from '@/assets/jss/materialKitReact'


const useStyles = makeStyles(theme => ({
	root: {
		display: 'none',
		zIndex: 6,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		[theme.breakpoints.up('sm')]: { display: 'block' },
	},

	iris: {
		transition: 'all 0.1s',
		top: '27%',
		left: '32%',
		transform: propertiesStyle => moveEye(propertiesStyle.hoverGame, 1),
		position: 'absolute',
		width: 45,
		height: 45,
		borderRadius: '100%',
		backgroundColor: ' #fff',
		transformStyle: 'preserve-3d',
	},
	pupil: {
		transition: 'all 0.3s',
		top: '25%',
		left: '20%',
		transform: propertiesStyle => moveEye(propertiesStyle.hoverGame, 4),
		position: 'absolute',
		width: 30,
		height: 30,
		borderRadius: '100%',
		backgroundColor: primaryColor,
		transformStyle: ' preserve-3d',
	},
}))

const Eye = ({ hoverGame }) => {
	const propertiesStyle = {
		hoverGame,
	}
	const classes = useStyles(propertiesStyle)
	
	return (
		<div className={classes.root}>
			<div className={classes.iris}>
				<div className={classes.pupil}></div>
			</div>

			<EyeImg />
		</div>
	)
}

Eye.propTypes = {
	hoverGame: PropTypes.number,
	path: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	setHoverGame: PropTypes.func,
}

export default Eye
