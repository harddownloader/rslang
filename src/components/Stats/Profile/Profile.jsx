import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './profile.scss'
import { PinDropSharp } from '@material-ui/icons'

const useStyles = makeStyles({
	icon: {
		width: '140px',
		height: '140px',
		color: '#58d6b3',
	},
	h3: {
		fontWeight: '800',
		letterSpacing: '1px',
		color: '#0af19c',
	},
	progress: {
		display: 'block',
		width: '200px',
		height: '25px',
		margin: '0 auto',
		padding: '2px',
		border: '0 none',
		background: '#b9b9b9',
		borderRadius: '14px',
		boxShadow: 'inset 0px 0.5px 3px',
	},
	p: {
		marginTop: '10px',
		color: 'yellow',
		fontSize: '18px',
		letterSpacing: '1px',
		textShadow: '1px 1px 2px black',
	},
	span: {
		fontWeight: '700',
		color: 'black',
		position: 'relative',
		top: '24px',
		fontSize: '16px'
	},
	week: {
		marginTop: '30px',
		color: '#7e919f',
		letterSpacing: '3px',
	},
})

const Profile = ({ level, exp, days }) => {
	console.log('exp',exp)

	const classes = useStyles()

	let [scale, setScale] = useState(100-exp)

	return (
		<>
			<img
				src='https://cdn.iconscout.com/icon/free/png-256/person-with-laptop-male-1597386-1354342.png'
				style={{ width: '120px', height: '120px' }}
			/>
			<div className='wrapper'>
				<h3 className={classes.h3}>УРОВЕНЬ {level}: </h3>
				<span className={classes.span}>{scale}%</span>
				<progress
					className={classes.progress}
					max='100'
					value={scale}></progress>
				<p className={classes.p}>
					До следующего уровня вам осталось{' '}
					<span style={{ fontWeight: '700' }}>{exp} xp</span>.
				</p>
				<p className={classes.week}>ВЫ ЗАНИМАЛИСЬ ДНЕЙ ПОДРЯД {days} / 7</p>
				{/* <button onClick={upLevel}>click</button> */}
			</div>
		</>
	)
}

export default Profile
