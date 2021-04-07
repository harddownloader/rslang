import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

const useStyles = makeStyles({
	Marks: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'red',
		fontSize: '3.5rem',
		textAlign: 'center',
		height: '100px',
	},
})

const TrueMarks = props => {
	const classes = useStyles()
	const [marksCount, setMarksCount] = useState(props.marksCount)

	const addCheckedBonus = count => {
		switch (count) {
			case 1:
				return <DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
			case 2:
				return (
					<div style={{ fontSize: '3.5rem' }}>
						<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />{' '}
						<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
					</div>
				)
			case 3:
				return (
					<div>
						<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />{' '}
						<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />{' '}
						<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
					</div>
				)
			case 4:
				return <DoneOutlineIcon />

			default:
				break
		}
	}
	useEffect(() => {
		console.log('Marks count', props.marksCount)
		addCheckedBonus(props.marksCount)
	}, [props.marksCount])

	return (
		<div className={classes.Marks}>{addCheckedBonus(props.marksCount)}</div>
	)
}

export default TrueMarks
