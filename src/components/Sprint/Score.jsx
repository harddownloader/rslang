import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	Score:{
        color: 'red',
        fontSize: '3.5rem',
        textAlign: 'center',
    }
})

const Score = (props) => {
	const classes = useStyles()
	return(
    <div>
        <div className={classes.Score}>Score: {props.score}</div>
        </div>) 
}

export default Score
