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
	MarksBlock: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	BorderMarks: {
		borderRadius: '50%',
		backgroundColor: 'white',
		width: '50px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

const TrueMarks = properties => {
	const classes = useStyles()
	const [marksCount, setMarksCount] = useState(properties.marksCount)

	const addCheckedBonus = count => {
		switch (count) {
			case 1:
				return (
					<div className={classes.MarksBlock} style={{ fontSize: '3.5rem' }}>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
					</div>
				)
			case 2:
				return (
					<div className={classes.MarksBlock} style={{ fontSize: '3.5rem' }}>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
					</div>
				)
			case 3:
				return (
					<div className={classes.MarksBlock} style={{ fontSize: '3.5rem' }}>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
					</div>
				)
			case 4:
				return (
					<div className={classes.MarksBlock} style={{ fontSize: '3.5rem' }}>
						<div className={classes.BorderMarks}>
							<DoneOutlineIcon style={{ fontSize: '3.5rem' }} />
						</div>
					</div>
				)

			default:
				break
		}
	}
	useEffect(() => {
		console.log('Marks count', properties.marksCount)
		addCheckedBonus(properties.marksCount)
	}, [properties.marksCount])

	return (
<<<<<<< HEAD
		<div className={classes.Marks}>
			{addCheckedBonus(properties.marksCount)}
		</div>
=======
		<div className={classes.Marks}>{addCheckedBonus(props.marksCount)}</div>
>>>>>>> 40b2a11c7684076e5a57f071de72367b384adf32
	)
}

export default TrueMarks
