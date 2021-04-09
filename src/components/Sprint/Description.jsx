import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
	Description:{
        color: 'red',
        fontSize: '3.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		  },
    }
}))

const Description = (props) => {
	const classes = useStyles()
	return(
    <div>
        <div className={classes.Description}>{props.content}</div>
        </div>) 
}

export default Description
