import React, { useEffect, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

// material
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// castom hooks
import { useFormState } from 'react-use-form-state'

// castom Api
import { updateUserWordsById } from '@/utils/apiRequests/userWords'

// components
import { Context } from './Context.jsx'
import EndGamePopup from './EndGamePopup'
import openFormReducer from './openFormReducer'

//----------------------------------------

function Alert(properties) {
	return <MuiAlert elevation={6} variant='filled' {...properties} />
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	inputBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyItems: 'center',
		alignItems: 'center',
	},
	formBox: {
		flexDirection: 'column',
		display: 'flex',
		fontSize: '2rem',
		'& input': {
			outline: 'none',
			width: '80%',
			margin: '1rem 0',
			border: propertiesStyle => {
				if (propertiesStyle.isChecked) {
					return `2px solid ${propertiesStyle.isErrors ? 'red' : 'green'}`
				}
				return 'none'
			},
			borderRadius: 5,
			padding: '2px 4px',
		},
		'& label': { color: '#fff' },
	},
}))

const Form = ({ data, setIsOpenPrompt }) => {
	const { contextStatistic } = useContext(Context)
	const { userToken } = useContext(Context)
	const { userId } = useContext(Context)

	const [statistic, dispatchStatistic] = contextStatistic
	const [formState, { label, text }] = useFormState()
	const [state, dispatch] = useReducer(openFormReducer, {
		isErrors: false,
		isChecked: false,
		open: false,
		isEndGame: false,
	})
	const { isErrors, isChecked, open } = state
	const classes = useStyles({ isErrors, isChecked })

	useEffect(() => {
		if (statistic.answer === 10) {
			dispatch({ type: 'END_GAME' })
		}
	}, [handleSubmit, statistic])

	const handleClose = reason => {
		if (reason === 'clickaway') {
			return
		}
		dispatch({ type: 'SET_CLOSE' })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (formState.values.word === data.word) {
			dispatchStatistic({ type: 'DECREMENT_CORRECT' })
			statistic.series >= statistic.bestSeries &&
				dispatchStatistic({ type: 'BEST_SERIES' })
			updateUserWordsById(
				userId,
				userToken,
				data._id,
				data.userWord.difficulty,
				{
					...data.userWord.optional,
					correct_answers: data.userWord.optional.correct_answers + 1,
					games: {
						...data.userWord.optional.games,
						speaker: {
							learned: true,
						},
					},
				},
			)
		} else {
			dispatchStatistic({ type: 'DECREMENT_ERRORS' })
			dispatch({ type: 'SET_ERROR' })
			updateUserWordsById(
				userId,
				userToken,
				data._id,
				data.userWord.difficulty,
				{
					...data.userWord.optional,
					uncorrect_answers: data.userWord.optional.uncorrect_answers + 1,
				},
			)
		}

		dispatch({ type: 'OPEN_ALL' })
		setIsOpenPrompt(true)

		e.target.blur()
	}

	return (
		<>
			<form onSubmit={handleSubmit} className={classes.formBox}>
				<div className={classes.inputBox}>
					<label {...label('word')}>your answer</label>
					<input
						{...text({
							name: 'word',
						})}
						required
					/>
				</div>
				<Button
					type='submit'
					variant='contained'
					disabled={isChecked}
					color='secondary'>
					Check
				</Button>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity={isErrors ? 'error' : 'success'}>
						{isErrors && isChecked
							? `error, current answer ${data.word}`
							: 'O_o'}
					</Alert>
				</Snackbar>
			</form>
			<EndGamePopup statistic={statistic} isEndGame={state.isEndGame} />
		</>
	)
}

Form.propTypes = {
	data: PropTypes.object,
	setIsOpenPrompt: PropTypes.func,
	currentArray: PropTypes.array,
	userId: PropTypes.string,
	userToken: PropTypes.string,
}

export default Form
