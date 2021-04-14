import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	gradesList: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		listStyle: 'none',
		width: '50%',
	},
	grade: {
		width: '6rem',
		height: '5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: 'solid .2rem #f8ee3a',
		marginRight: '1rem',
		color: '#f8ee3a',
		textAlign: 'center',
		fontSize: '1.5rem',
		'&:hover': {
			color: 'black',
			cursor: 'pointer',
		},
	},
	grade_active: {
		color: '#363538',
		backgroundColor: '#fffbad',
	},
}))
export default function Difficulty(properties) {
	const classes = useStyles()
	const grades = [
		'Very easy',
		'Easy',
		'Medium',
		'Hard',
		'Very hard',
		'Extra hard',
	]
	function handleClick(event) {
		const { target } = event
		if (document.querySelector(`.${classes.grade_active}`))
			document
				.querySelector(`.${classes.grade_active}`)
				.classList.toggle(classes.grade_active)
		target.classList.toggle(classes.grade_active)
		properties.change(+target.dataset.level)
	}
	return (
		<>
			<ul className={classes.gradesList}>
				{grades.map((item, index) => {
					if (+index === +properties.grade) {
						return (
							<li
								key={`${index} level`}
								data-level={index}
								className={`${classes.grade} ${classes.grade_active}`}
								onClick={event => handleClick(event)}>
								{item}
							</li>
						)
					}
					return (
						<li
							key={`${index} level`}
							data-level={index}
							className={classes.grade}
							onClick={event => handleClick(event)}>
							{item}
						</li>
					)
				})}
			</ul>
		</>
	)
}
