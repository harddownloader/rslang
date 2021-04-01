import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    wrapperBackground: {
        backgroundImage: 'url(https://i.pinimg.com/originals/14/65/e5/1465e5626b03eb86ab9bfce56a1b0ca0.png)',
        height: '937px',
        background: 'grey',
        fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
        textAlign: 'center'

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
        fontSize: '20px'
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
        color: '#b1b132ab'
    },
    Typography: {
        fontWeight: '900',
        letterSpacing: '2px',
    },
    devider: {
        width: '2px',
        background: 'yellow',
        height: '120px',
        margin: '80px 50%',
    }

})

const text = [
    { id: 1, text: 'asdasdasd', title: 'one' },
    { id: 2, text: 'asdasdasd', title: 'one' },
    { id: 3, text: 'asdasdasd', title: 'one' },
]

const about = [
    { id: 1, impact: 'макет, игра, дизайн сайта', name: 'Серафим Олегович', description: 'Vi har skabt et ekadasdasdasd da das adas af af afdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
    { id: 2, impact: 'макет, игра, дизайн сайта', name: 'Серафим Будько', description: 'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
    { id: 3, impact: 'макет, игра, дизайн сайта', name: 'Серафим Суикат', description: 'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
    { id: 4, impact: 'макет, игра, дизайн сайта', name: 'Серафим Обама', description: 'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
    { id: 5, impact: 'макет, игра, дизайн сайта', name: 'Серафим Лукашенко', description: 'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
    { id: 6, impact: 'макет, игра, дизайн сайта', name: 'Серафим Путин', description: 'Vi har skabt et ekadasdasdasd da das adas af af  afdsfdsfasdadada dadsd adadadadadadasdasdadadadasd ' },
]



const AboutTeam = () => {

    const classes = useStyles();

    const getText = text.map(item => {
        return (
            <Grid item key={item.id} >
                <Paper square className={classes.paper}>
                    <Typography variant='h5' className={classes.Typography} >
                        {item.title}
                    </Typography>
                    <Typography className={classes.peperText}>
                        {item.text}
                    </Typography>
                </Paper>
            </Grid>
        )
    })

    const getAbout = about.map(item => {
        return (
            <Grid container justify='center' key={item.id}>
                <Grid item  >
                    <div className={classes.profileDiv} >
                        <Typography variant='h5' className={classes.Typography}>{item.name}</Typography>
                        <p className={classes.pText}>{item.description}</p>
                        <p className={classes.pImpact}>{item.impact}</p>
                    </div>
                </Grid>
                <Grid > <img src='https://lifeglobe.net/x/entry/296/blackandwhite_3.jpg' alt='personPhoto' /></Grid>
                <Divider orientation='vertical' className={classes.devider} />
            </Grid>
        )
    })

    return (
        <>
            <div className={classes.wrapperBackground} >
                <Typography variant="h3" align='center' className={classes.heading}>О команде</Typography>
                <Grid container justify='center'  >
                    {getText}
                </Grid>
            </div>
            <div style={{ marginTop: '100px' }}>
                {getAbout}
            </div>

        </>
    )
}

export default AboutTeam;