import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        colorSecondary: '#f8ee3a',
    },
}))

export default function Loader() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <LinearProgress color='secondary' />
        </div>
    )
}
