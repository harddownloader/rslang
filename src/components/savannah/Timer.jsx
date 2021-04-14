import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	timer: {
		marginLeft: '7%',
		fontSize: '3rem',
		fontWeight: 'bold',
	},
	progress: {
		borderColor: 'yellow'
	}
})

function CircularProgressWithLabel(props) {
	const classes = useStyles()
	return (
		<Box position='relative' display='inline-flex'>
			<CircularProgress variant='determinate' value={props.value * 20} size='100px' className={classes.progress} color='secondary' />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position='absolute'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Typography variant='h3' component='div' color='textSecondary'>
					{props.value}
				</Typography>
			</Box>
		</Box>
	);
}

export default function Timer(properties) {
	const [time, setTime] = useState(properties.sec)
	const classes = useStyles()
	if (time === 0) properties.lose('lose')
	useEffect(() => {
		function counter() {
			if (time !== 0) setTime(time - 1)
			return time
		}
		const timer = setInterval(() => {
			counter(time)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [time])
	// return <span className={properties.cls}>{time}</span>
	return <CircularProgressWithLabel variant='determinate' value={time} className={classes.timer} />
}
