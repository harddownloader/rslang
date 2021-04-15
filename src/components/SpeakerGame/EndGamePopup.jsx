import React from 'react'
import PropTypes from 'prop-types'

// matirial
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

// router
import { Link } from 'react-router-dom'
// ----------------------------------------------

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))

export default function TransitionsModal({ isEndGame, statistic }) {
	const classes = useStyles()
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className={classes.modal}
			open={isEndGame}
			//	onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={isEndGame}>
				<div className={classes.paper}>
					<h2 id='transition-modal-title'>End Game</h2>
					<p id='transition-modal-description'>
						правильных ответов: {statistic.currentAnswer}
					</p>
					<p id='transition-modal-description'>
						ошибок: {statistic.errorAnswer}
					</p>
					<p id='transition-modal-description'>
						лучшая серия: {statistic.bestSeries} слова
					</p>
					<ButtonGroup
						color='secondary'
						aria-label='outlined secondary button group'>
						<Link to='/'>
							<Button>Home</Button>
						</Link>
						<Link to='/games/speaker?name=0'>
							<Button>New Game</Button>
						</Link>
					</ButtonGroup>
				</div>
			</Fade>
		</Modal>
	)
}

TransitionsModal.propTypes = {
	isEndGame: PropTypes.bool,
	statistic: PropTypes.object,
}
