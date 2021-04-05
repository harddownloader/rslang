import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	wrapperProgress: {
		display: 'flex',
		justifyContent: 'center',
	},
	div: {
		border: '5px solid #f0ede5',
		borderRadius: '20px',
		width: '250px',
		backgroundColor: '#f4f4f4',
		fontWeight: '600',
		color: '#7e919f;',
	},
	p: {
		color: 'black',
		fontSize: '25px',
		fontWeight: '800',
	},
})

const Progress = () => {
	const classes = useStyles()

	return (
		<Grid container spacing={2}>
			<Grid item lg={4} xs={12} className={classes.wrapperProgress}>
				<div className={classes.div}>
					<p>Изученных слов</p>
					<p className={classes.p}>0</p>
				</div>
			</Grid>
			<Grid item lg={4} xs={12} className={classes.wrapperProgress}>
				<div className={classes.div}>
					<p>Правильных ответов</p>
					<p className={classes.p}>0</p>
				</div>
			</Grid>
			<Grid item lg={4} xs={12} className={classes.wrapperProgress}>
				<div className={classes.div}>
					<p>Серия правильных ответов</p>
					<p className={classes.p}>0</p>
				</div>
			</Grid>
		</Grid>
	)
}

export default Progress
