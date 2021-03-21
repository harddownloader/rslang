import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from './Profile/Profile'

const useStyles = makeStyles({
    wrapper: {
        height: 'auto',
    },
    wrapperProfiler: {
        background: '#f4f4f4',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        borderRadius: '30px',
        height: '350px',
        margin: '25px 0px',
        textAlign: 'center'
    },
    wrapperStats: {
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        borderRadius: '30px',
        height: '350px',
        marginTop: '25px',
    }
})

const Stats = () => {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.wrapper} >
                <Grid container spacing={3}>
                    <Grid className={classes.wrapperProfiler} item xs={12} xl={3}><Profile /></Grid>
                    <Grid xs={1}></Grid>
                    <Grid className={classes.wrapperStats} item xs={12} xl={8}>Hello</Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Stats;