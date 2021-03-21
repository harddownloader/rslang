import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import startAvatarImg from '@/assets/images/sheep.png'

const useStyles = makeStyles(theme => ({
	avatar: {
		cursor: 'pointer',
		marginLeft: 10,
		[theme.breakpoints.up('md')]: {
			marginTop: 10,
			marginLeft: 0,
		},
	},
}))

const Logo = () => {
	const classes = useStyles()
	return (
		<Avatar
			alt='Profile Picture'
			className={classes.avatar}
			src={startAvatarImg}
		/>
	)
}

export default Logo
