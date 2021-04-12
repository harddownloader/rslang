import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Profile from './Profile/Profile'
import DisplayStats from './DisplayStats/DisplayStats'
import Progress from './Progress/Progress'
import Recharts from './diagram/Recharts'
import RechartsProgress from './diagram/RechartsProgress'
import Calendar from './Calendar/Calendar'
import Select from './Select/Select'

const useStyles = makeStyles({
	wrapper: {
		height: 'auto',
	},
	wrapperProfiler: {
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		background: '#353344e3;',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '400px',
		margin: '25px 0px',
		textAlign: 'center',
	},
	wrapperStats: {
		backgroundImage:
			'url(https://png.pngtree.com/illustrations/20190320/ourlarge/pngtree-high-tech-2-5d-technology-the-internet-png-image_22625.jpg)',
		backgroundSize: '832px 400px',
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '400px',
		marginTop: '25px',
		textAlign: 'center',
	},
	button: {
		border: 'none',
		textDecoration: 'none',
		display: 'inline-block',
		width: '90px',
		height: '90px',
		borderRadius: '90px',
		margin: '10px 20px',
		fontFamily: "'Montserrat', sans-serif",
		fontSize: '11px',
		textAlign: 'center',
		fontWeight: '900',
		color: '#524f4e',
		background: 'white',
		boxShadow: '0 8px 15px rgba(0, 0, 0, .1)',
		transition: '.3s',
		'&:hover': {
			background: '#2EE59D',
			boxShadow: '0 15px 20px rgba(46, 229, 157, .4)',
			color: 'white',
			transform: 'translateY(-7px)',
		},
	},
	recharts: {
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		background: 'rgb(12, 179, 232)',
		background:
			'linear-gradient(90deg, rgba(12,179,232,1) 2%, rgba(38,241,211,1) 80%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '30px',
		height: '450px',
		marginTop: '25px',
		textAlign: 'center',
	},
})

const Stats = () => {
	const [isStats, setIsStats] = useState(true)

	const setStats = () => {
		setIsStats(!isStats)
	}

	const classes = useStyles()

	return (
		<div style={{ background: '#28282a' }}>
			<Container maxWidth='lg' className={classes.wrapper}>
				<Grid container spacing={2}>
					<Grid className={classes.wrapperProfiler} item xs={12} xl={3}>
						<Profile />
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid className={classes.wrapperStats} item xs={12} xl={8}>
						{isStats ? (
							<>
								<Select setStats={setStats} />
								<DisplayStats />
							</>
						) : (
							<>
								<Select setStats={setStats} />
								<Calendar />
							</>
						)}
					</Grid>
				</Grid>
				{isStats ? (
					<Grid container className={classes.recharts} spacing={2}>
						<Grid container item xs={3}>
							<Grid item lg={12} xs={12}>
								<Button size='large' className={classes.button}>
									Саванна
								</Button>
							</Grid>
							<Grid item lg={12} xs={12}>
								<Button size='large' className={classes.button}>
									Аудио-вызов
								</Button>
							</Grid>
							<Grid item lg={12} xs={12}>
								<Button size='large' className={classes.button}>
									Спринт
								</Button>
							</Grid>
							<Grid item lg={12} xs={12}>
								<Button size='large' className={classes.button}>
									Default
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<Progress />
						</Grid>
					</Grid>
				) : (
					<Grid container className={classes.recharts}>
						<Grid item md={6} xs={12}>
							<Recharts />
						</Grid>
						<Grid item md={6} xs={12}>
							<RechartsProgress />
						</Grid>
					</Grid>
				)}
			</Container>
		</div>
	)
}

export default Stats
