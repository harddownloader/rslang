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
		letterSpacing: '2px',
		fontSize: '25px',
	},
	span: {
		color: '#7e919f',
		fontSize: '17px',
	},
})

const DisplayStats = ({ dates }) => {

	const countAnswer = dates[0].games.audio.countAnswer + dates[0].games.myGame.countAnswer + dates[0].games.savana.countAnswer + dates[0].games.sprint.countAnswer

	const answerTrue = dates[0].games.audio.trueAnswer + dates[0].games.myGame.trueAnswer + dates[0].games.savana.trueAnswer + dates[0].games.sprint.trueAnswer

	const result = Math.round((answerTrue * 100) / countAnswer)

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
						<div className={classes.number}>{answerTrue}</div>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className={classes.border}>
						<div >
							<p className={classes.p}>
								Правильных <br />
								ответов
							</p>
						</div>
						<div className={classes.number}>{result}%</div>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default DisplayStats
