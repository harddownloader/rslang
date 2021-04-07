import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@/utils/colors'

const useStyles = makeStyles(theme => ({
	title: {
		textTransform: 'uppercase',
		cursor: 'pointer',
		fontFamily:
			'Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
		fontWeight: 700,
		fontSize: '1.65rem',
		lineHeight: '1',
		whiteSpace: 'nowrap',
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
	return <span className={classes.title}>RsLang</span>
}

export default Title
