import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@/utils/colors'

const useStyles = makeStyles(theme => ({
	title: {
		// cursor: 'pointer',
		// '&:hover': {
		// 	color: colors.borderColor,
		// },
		// [theme.breakpoints.up('md')]: {
		// 	transform: 'rotate(-90deg)',
		// },
	},
}))

const Title = () => {
	const classes = useStyles()
	return (
		<div className="web-slogan">
			<span className={classes.title}>RsLang</span>
		</div>	
		
	)
}

export default Title
