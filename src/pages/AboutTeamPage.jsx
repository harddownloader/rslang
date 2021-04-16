import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-scroll'
import '@/assets/scss/AboutTeam.scss'
import backAbout from '../assets/images/AboutTeam.png'
import MetaTag from '../components/MetaTag/MetaTag'
import sereja from '@/assets/images/profile/sereja.jpg'
import dima from '@/assets/images/profile/dima.png'
import serafim from '@/assets/images/profile/serafim.jpg'
import vlas from '@/assets/images/profile/vlas.jpg'
import misha from '@/assets/images/profile/misha.jpg'
import Header from '@/components/header'

const useStyles = makeStyles({
	wrapperBackground: {
		backgroundImage:
			`url(${backAbout})`,
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
		margin: '7px 40px',
		width: '500px',
		borderBottom: 'solid',
		borderBottomColor: 'yellow',
		boxShadow: 'none',
		borderRadius: '20px',
	},
	peperText: {
		marginTop: '20px',
		color: 'white',
		fontSize: '19px',
	},
	profileDiv: {
		width: '400px',
		marginTop: '130px',
		textAlign: 'center',
	},
	pImpact: {
		marginTop: '15px',
		fontWeight: '800',
		fontSize: '22px',
		color: '#a0a0a0',
	},
	pText: {
		marginTop: '25px',
		fontWeight: '800',
		fontSize: '20px',
		color: '#b1b132ab',
	},
	Typography: {
		fontWeight: '800',
		letterSpacing: '2px',
		textShadow: '1px 1px 2px black',
	},
	devider: {
		width: '2px',
		background: 'yellow',
		height: '120px',
		margin: '40px 50%',
	},
})

const text = [
	{
		id: 1,
		text:
			'Рады представить вам членов нашей команды frontend разработчиков, принимавших участие в создании данного проекта. В нашей команде состоит 5 перспективных начинающих IT специалистов, заинтересованных в постоянном саморазвитии в выбранной сфере деятельности. Каждый из нас, работая в группе, проявлет немалое уважение к своим коллегам, старается прислушиваться к мнению каждого, выполняя при этом, взятые на себя обязанности.Мы готовы к постоянному профессиональному росту и покорению новых вершин!  ',
		title: 'Welcome!'
	},
]

const about = [
	{
		id: 1,
		impact: 'Вклад : Redux-React, Registration, Backend,Vocabulary,Footer',
		src: serafim,
		name: 'Круцкевич Серафим',
		description:
			'Основатель команды нашего проекта. Ответственный и отзывчивый человек, способный граммотно организовать рабочий процесс.  ',
	},
	{
		id: 2,
		impact: 'Вклад : React-Redux,AboutTeam,Promo,Statistics',
		src: vlas,
		name: 'Маскаленчик Влас',
		description:
			'Один из основателей команды проекта. Надежный напарник и коммуникабельный человек, открыт к познанию нового. ',
	},
	{
		id: 3,
		impact: 'Вклад : Саванна',
		src: dima,
		name: 'Дмитрий Долгопол',
		description:
			'Позитивный и энергичный член команды. Упорно идет к своей мечте, переступая через любые препятствия.',
	},
	{
		id: 4,
		impact: 'Вклад : Router,Speaker,Menu,Webpack,Eye',
		src: sereja,
		name: 'Сергей Шевченко',
		description:
			'Внимательный и трудолюбивый напарник. Добросевестно выполняет взятые на себя обязанности.',
	},
	{
		id: 5,
		impact: 'Вклад : Sprint',
		src: misha,
		name: 'Миша',
		description:
			'Эрудированный и разносторонный коллега, деликатный в общении и старательный в работе.',
	},
]

const AboutTeam = () => {

	const classes = useStyles()

	const getText = text.map(item => {
		return (
			<Grid item key={item.id} style={{ marginTop: '90px' }}>
				<Paper square className={classes.paper}>
					<Typography variant='h3' className={classes.Typography}>
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
						<Typography variant='h3' className={classes.Typography}>
							{item.name}
						</Typography>
						<p className={classes.pText}>{item.description}</p>
						<p className={classes.pImpact}>{item.impact}</p>
					</div>
				</Grid>
				<Grid >
					<img style={{ width: '500px', height: '500px' }}
						src={item.src}
						alt='personPhoto'
					/>
				</Grid>
				<Divider orientation='vertical' className={classes.devider} />
			</Grid>
		)
	})

	return (
		<>
			<Header />
			<MetaTag text='AboutTeam' />
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
