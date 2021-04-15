import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import savanah from '../assets/images/savannah.png'
import sprint from '../assets/images/sprint.png'
import settings from '../assets/images/settings.png'
import stats from '../assets/images/stats.png'
import headphones from '../assets/images/headphones.png'
import Video from '../components/PromoVideo/Video'
import MetaTag from '../components/MetaTag/MetaTag'
import Header from '@/components/header'


const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        background: '#353344e3',
    },
    p: {
        color: 'white',
        fontSize: '16px'
    },
    header: {
        color: 'white',
        fontWeight: '800',
        textShadow: '1px 1px 2px black',
        fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
        letterSpacing: '2px'
    },
    games: {
        background: 'rgb(12, 179, 232)',
        background:
            'linear-gradient(90deg, rgb(255 235 59 / 61%) 2%, #ffeb3b 80%)',
    },
    other: {
        background: 'rgb(12, 179, 232)',
        background:
            'linear-gradient(90deg, rgb(243 243 243 / 55%) 2%, #aba7a7 80%)',
    },
    img: {
        width: '92.5px',
        heigh: '92.5px'
    },
    head: {
        marginTop: '20px',
    },
    block: {
        marginTop: '10px',
    },
    gameTypo: {
        color: 'white',
        fontWeight: '800',
    },
    otherTypo: {
        color: 'yellow',
        fontWeight: '800'
    }
})

const games = [
    { id: 1, name: 'Саванна', description: 'В игре саванна вы научитесь новыми словами.Тренируйся регулярно и сможешь на лету подбирать правильные слова при письме и в процессе говорения.', src: savanah },
    { id: 2, name: 'Спринт', description: 'В спринт слова находятся на изучение. Изучай и повторяй.', src: sprint },
    {
        id: 3,
        name: 'Аудирование',
        src: headphones,
        description: 'Аудирование по английскому языку, или восприятие речи на слух, является одной из наиболее важных составляющих процесса изученияанглийского языка. Ведь важно не только правильно выразить ту или иную мысль, но и понять, о чем говорит собеседник.'
    },
]

const other = [
    { id: 1, name: 'Статистика', description: 'В этом разделе ты сможешь отслеживать свой ежедневный так и долгосрочный прогресс, отслеживай свою статистику по каждой игре, смотри сколько слов было изучено, здесь ты узнаешь свои слабые и сильные стороны.', src: stats },
    { id: 2, name: 'Настройки', description: 'Настройка это важная часть сайта, ты сможешь настраивать фишечки под себя.', src: settings }
]


const Promo = () => {

    const classes = useStyles()

    const getGames = games.map((item) => {
        return (
            <Grid container item xs={12} key={item.id}>
                <MetaTag text='Promo' />
                <Grid item xs={12} className={classes.head}>
                    <img className={classes.img} src={item.src} alt='photo' />
                </Grid>
                <Grid item xs={12} className={classes.head}><Typography className={classes.gameTypo} variant='h3'>{item.name}</Typography></Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' style={{ margin: '5px 20%', textIndent: '10px', fontSize: '17px' }} >
                        {item.description}
                    </Typography></Grid>
            </Grid>
        )
    })

    const getOher = other.map((item) => {
        return (
            <Grid container item xs={12} key={item.id}>
                <Grid item xs={12} className={classes.head}>
                    <img className={classes.img} src={item.src} alt='photo' />
                </Grid>
                <Grid item xs={12} className={classes.head}><Typography className={classes.otherTypo} variant='h3'>{item.name}</Typography></Grid>
                <Grid item xs={12}>
                    <Typography variant='h4' style={{ margin: '5px 20%', color: 'white' }} >
                        {item.description}
                    </Typography></Grid>
            </Grid>
        )
    })

    return (
        <>
            <Header />
            <Grid container className={classes.wrapper}>
                <Grid item xs={12} >
                    <Typography className={classes.header} variant='h2'>Приветствуем тебя на нашем сайте</Typography>
                    <div style={{ margin: '20px 20%' }}>
                        <p className={classes.p}>
                            Игровое приложение, которое поможет вам в изучение английского языка. В основу приложения входят: игры, статистика, настройки, словарь.
                            Изучение иностранного языка в игровой форме, способствует благоприятному запоминанию и повторению пройденного, по выбранной теме, материала.
                            Благодаря использованию приложения и его аудиальным возможностям, вы сможете запоминать информацию на слух а также употребять слова и выражения в свободной речи.
                            Встроенная статистика позволяет отслеживать ваш рост в процессе изучения языка.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12}><div style={{ width: '483px', height: '350px', marginLeft: 'calc(50% - 241.5px)' }}><Video /></div></Grid>
                <Grid container item xs={6} className={classes.games} >
                    <Grid className={classes.head} item xs={12}><Typography className={classes.gameTypo} align='center' variant='h2'>Наши игры</Typography></Grid>
                    {getGames}
                </Grid>
                <Grid container item xs={6} className={classes.other}>
                    <Grid className={classes.head} item xs={12}><Typography className={classes.otherTypo} align='center' variant='h2'>Другое</Typography></Grid>
                    {getOher}
                </Grid>
            </Grid>

        </>
    )
}

export default Promo;
