import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@/utils/colors'

const useStyles = makeStyles(theme => ({
	title: {
		cursor: 'pointer',
		'&:hover': {
			color: colors.borderColor,
		},
		[theme.breakpoints.up('md')]: {
			transform: 'rotate(-90deg)',
		},
	},
}))

const Title = () => {
	const classes = useStyles()
	return <h1 className={classes.title}>RssLang</h1>
}

export default Title
