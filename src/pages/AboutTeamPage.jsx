import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-scroll'
import '@/assets/scss/AboutTeam.scss'

const useStyles = makeStyles({
	wrapperBackground: {
		backgroundImage:
			'url(https://i.pinimg.com/originals/14/65/e5/1465e5626b03eb86ab9bfce56a1b0ca0.png)',
		height: '937px',
		background: 'grey',
		fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
		textAlign: 'center',
	},
	heading: {
		color: 'white',
		paddingTop: '50px',
		letterSpacing: '2px',
		textShadow: '1px 1px 2px black',
	},
	paper: {
		background: '#80808052',
		margin: '110px 40px',
		width: '300px',
		borderBottom: 'solid',
		borderBottomColor: 'yellow',
		boxShadow: 'none',
		borderRadius: '20px',
	},
	peperText: {
		color: 'white',
		fontSize: '20px',
	},
	profileDiv: {
		width: '400px',
		marginTop: '130px',
		textAlign: 'center',
	},
	pImpact: {
		fontWeight: '800',
		fontSize: '25px',
		color: '#a0a0a0',
	},
	pText: {
		fontWeight: '800',
		fontSize: '25px',
		color: '#b1b132ab',
	},
	Typography: {
		fontWeight: '900',
		letterSpacing: '2px',
	},
	devider: {
		width: '2px',
		background: 'yellow',
		height: '120px',
		margin: '50px 50%',
	},
})

const text = [
	{
		id: 1,
		text:
			'Ea sunt elit tempor aliquip duis sint cillum excepteur eiusmod laboris duis do culpa. Mollit et aliqua ut proident boris. Excepteur consectetur Lorem officia enim dolore in occaecat laboris id mollit sint. Et in pariatur ipsum eiusmod excepteur laborum pariatur sunt.',
		title: 'Nostrud sunt id fugiat.',
	},
	{
		id: 2,
		text:
			'`Voluptate minim et voluptate commodo minim eiusmod ut consectetur irure veniam labore. Veniam veniam in et esse culpa excepteur qui enim aute veniam laboris culpa officia. Nostrud ullamco aliqua proident nulla sunt in enim veniam nostrud. Eiusmod quis id duis aliquip quis aliqua aliquip duis sit Lorem dolore. Esse irure magna nostrud culpa veniam id ut qui laborum.',
		title: 'Non exercitation ut laboris.',
	},
	{
		id: 3,
		text:
			'Nulla adipisicing consequat officia excepteur. Lorem reprehenderit reprehenderit ex Lorem eu deserunt aliqua sit quis ad. Ex nisi eu aliqua id amet ipsum veniam.',
		title: 'Non aliquip commodo.',
	},
]

const about = [
	{
		id: 1,
		impact: 'Вклад : Redux-React, Registration, Backend,Vocabulary',
		name: 'Круцкевич Серафим',
		description:
			'Do nostrud dolor culpa tempor tempor pariatur tempor minim irure ex.Consequat voluptateasdadasdad. ',
	},
	{
		id: 2,
		impact: 'Вклад : React-Redux,AboutTeam,Promo,Statistics',
		name: 'Маскаленчик Влас',
		description:
			'Do nostrud dolor culpa tempor tempor pariatur tempor minim irure ex.Consequat voluptateasdadasdad.',
	},
	{
		id: 3,
		impact: 'макет, игра, дизайн сайта',
		name: 'Серафим Суикат',
		description:
			'Do nostrud dolor culpa tempor tempor pariatur tempor minim irure ex.Consequat voluptateasdadasdad.  ',
	},
	{
		id: 4,
		impact: 'макет, игра, дизайн сайта',
		name: 'Серафим Обама',
		description:
			'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ',
	},
	{
		id: 5,
		impact: 'макет, игра, дизайн сайта',
		name: 'Серафим Лукашенко',
		description:
			'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ',
	},
	{
		id: 6,
		impact: 'макет, игра, дизайн сайта',
		name: 'Серафим Путин',
		description:
			'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ',
	},
]

const AboutTeam = () => {
	const classes = useStyles()

	const getText = text.map(item => {
		return (
			<Grid item key={item.id}>
				<Paper square className={classes.paper}>
					<Typography variant='h5' className={classes.Typography}>
						{item.title}
					</Typography>
					<Typography className={classes.peperText}>{item.text}</Typography>
				</Paper>
			</Grid>
		)
	})

	const getAbout = about.map(item => {
		return (
			<Grid container justify='center' key={item.id}>
				<Grid item>
					<div className={classes.profileDiv}>
						<Typography variant='h5' className={classes.Typography}>
							{item.name}
						</Typography>
						<p className={classes.pText}>{item.description}</p>
						<p className={classes.pImpact}>{item.impact}</p>
					</div>
				</Grid>
				<Grid>
					{' '}
					<img
						src='https://lifeglobe.net/x/entry/296/blackandwhite_3.jpg'
						alt='personPhoto'
					/>
				</Grid>
				<Divider orientation='vertical' className={classes.devider} />
			</Grid>
		)
	})

	return (
		<>
			<div className={classes.wrapperBackground}>
				<Typography variant='h3' align='center' className={classes.heading}>
					О команде
				</Typography>
				<Grid container justify='center'>
					{getText}
				</Grid>
				<Link
					className='downButton'
					activeClass='active'
					to='point'
					spy={true}
					smooth={true}
					duration={1000}>
					<div className='center-con'>
						<div className='round'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</Link>
			</div>
			<div style={{ marginTop: '100px' }} className='point'>
				{getAbout}
			</div>
		</>
	)
}

export default AboutTeam
