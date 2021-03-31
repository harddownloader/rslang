import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	savannah__rules: {
		width: '90%',
		height: '100%',
		alignSelf: 'center',
		justifySelf: 'center',
		fontWeight: 'bold',
		fontSize: '2rem',
		textAlign: 'justify',
		listStyleType: 'none',
		margin: '0 auto',
		marginTop: '5rem',
		padding: '0',
	},
	savannah__rules__item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		fontWeight: 'normal',
		textAlign: 'justify',
		marginBottom: '2rem',
	},
	rules__square: {
		width: '5rem',
		height: '5rem',
		borderRadius: '5px',
		display: 'block',
		border: 'solid .2rem #f8ee3a',
		marginRight: '1rem',
		color: '#f8ee3a',
		textAlign: 'center',
		lineHeight: '5rem',
	},
	rulesList: {
		display: 'flex',
		flexDirection: 'column',
	},
	button_start: {
		alignSelf: 'center',
		justifySelf: 'center',
		marginTop: '5rem',
		fontSize: '2rem',
	},
}))

export default function Rules(properties) {
	const classes = useStyles()
	const rules = [
		'In each round, you must choose the correct translation option from the proposed ones in 5 seconds.',
		'If you are wrong or the time is up, you lose the attempt.',
		'If you complete the game, words that were answered correctly are removed from future rotations.',
		'If all attempts have been spent, all words may appear again in future games.',
	]
	return (
		<div className={classes.rulesList}>
			<ol className={classes.savannah__rules}>
				{rules.map(function ruleIt(rule, index) {
					return (
						<li key={index} className={classes.savannah__rules__item}>
							<div className={classes.rules__square}>{index + 1}</div>
							<div style={{ flexWrap: 'wrap', width: '70%' }}>{rule}</div>
						</li>
					)
				})}
			</ol>
			<Button
				variant='outlined'
				color='secondary'
				className={classes.button_start}
				onClick={() => properties.start(true)}>
				START THE GAME
			</Button>
		</div>
	)
}
