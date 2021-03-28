import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	Description:{
        color: 'red',
        fontSize: '3.5rem',
        textAlign: 'center',
    }
})

const Description = (props) => {
	const classes = useStyles()
	return(
    <div>
        <div className={classes.Description}>{props.content}</div>
        </div>) 
}

export default Description