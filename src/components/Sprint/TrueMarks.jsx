import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

const useStyles = makeStyles({
	Score: {
		color: 'red',
		fontSize: '3.5rem',
		textAlign: 'center',
	},
})

const TrueMarks = props => {
	const classes = useStyles()
	const [marksCount, setMarksCount] = useState(props.marksCount)

	const addCheckedBonus = count => {
		switch (count) {
			case 1:
				console.log('Good answer 1')
				return <DoneOutlineIcon />
			case 2:
				console.log('Good answer 2')
				return (
					<div>
						<DoneOutlineIcon /> <DoneOutlineIcon />
					</div>
				)
			case 3:
				console.log('Good answer 3')
				return (
					<div>
						<DoneOutlineIcon /> <DoneOutlineIcon /> <DoneOutlineIcon />
					</div>
				)
			case 4:
				console.log('Good answer 4')
				return <DoneOutlineIcon />

			default:
				break
		}
	}
	useEffect(() => {
		console.log('Marks count', props.marksCount)
		addCheckedBonus(props.marksCount)
	}, [props.marksCount])

	return <div>{addCheckedBonus(props.marksCount)}</div>
}

export default TrueMarks
