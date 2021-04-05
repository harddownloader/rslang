import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	wrapper: {
		marginTop: '60px',
	},
	number: {
		fontWeight: '700',
		fontSize: '26px',
	},
	border: {
		background: 'white',
		borderRadius: '20px',
		border: '5px solid #f0ede5',
	},
	backgroundGrid: {
		background: 'white',
	},
	p: {
		color: '#0eb37d',
		fontWeight: '700',
		fontSize: '25px',
		letterSpacing: '2px',
	},
	span: {
		color: '#7e919f',
		fontSize: '17px',
	},
})

const DisplayStats = () => {
	const classes = useStyles()

	return (
		<div>
			<Grid container spacing={3} className={classes.wrapper}>
				<Grid item xs={6}>
					<div className={classes.border}>
						<div className={classes.text}>
							<p className={classes.p}>
								Добавлено <br />
								<span className={classes.span}>Слов/Фраз</span>
							</p>
						</div>
						<div className={classes.number}>0</div>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className={classes.border}>
						<div className={classes.p}>
							<p>
								Правильных <br />
								ответов
							</p>
						</div>
						<div className={classes.number}>0%</div>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default DisplayStats
