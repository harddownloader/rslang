import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	cls: {
		color: 'red',
		fontSize: '5.5rem',
		textAlign: 'center',
	},
})

export default function Timer(properties) {
	const classes = useStyles()
	const [time, setTime] = useState(properties.sec)
	useEffect(() => {
		function counter(time) {
			if (time == 0) return
			setTime(time - 1)
		}
		const timer = setInterval(() => {
			counter(time)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [time])
	return <div className={classes.cls}>{time}</div>
}
