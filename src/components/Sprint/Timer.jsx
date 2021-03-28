import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	time: {
		color: 'red',
		fontSize: '5.5rem',
		textAlign: 'center',
	},
})

const Timer = () => {
	let timeLeft = 30
	const [second, setSecond] = useState(30)
	const classes = useStyles()
	useEffect(() => {
		// let timer = setTimeout(() => {
		// 	if (timeLeft > 0) {
		// 		setSecond(second - 1)
		// 	}
		// }, 1000)
		// return clearInterval(timer)
		const timer = setInterval(() => {
			if (timeLeft > 0) {
				setSecond(second - 1)
				timeLeft -= 1
				console.log(second)
			}
		}, 1000)
		return () => clearInterval(timer)
	}, [])
	return (
		<div>
			<div className={classes.time}>{second}</div>
		</div>
	)
}

export default Timer
