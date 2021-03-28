import React from 'react';
import Select from '../DisplayStats/Select/Select'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { LinearScale } from '@material-ui/icons';

const useStyles = makeStyles({
    wrapper: {
        marginTop: '40px',
    },
    number: {
        fontWeight: '700',
        fontSize: '26px'
    },
    border: {
        background: 'white',
        borderRadius: '20px',
        border: '5px solid #f0ede5'
    },
    backgroundGrid: {
        background: 'white'
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
    }
})

const DisplayStats = ({ setStats }) => {

    const classes = useStyles();

    return (
        <div>
            <Select setStats={setStats} />
            <Grid container spacing={3} className={classes.wrapper}>
                <Grid item xs={6}>
                    <div className={classes.border}>
                        <div className={classes.text}>
                            <p className={classes.p}>Добавлено <br />
                                <span className={classes.span}>Слов/Фраз</span></p>
                        </div>
                        <div className={classes.number}>0</div>
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className={classes.border}>
                        <div className={classes.p}>
                            <p>Правильных <br />ответов</p>
                        </div>
                        <div className={classes.number}>0%</div>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}

export default DisplayStats;