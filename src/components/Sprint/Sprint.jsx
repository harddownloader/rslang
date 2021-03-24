import React from 'react'

import Header from '@/components/header'
import MainGame from '@/components/Sprint/MainGame'

import words from '@/components/Sprint/words'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	root: {
		margin: '0 auto',
		color: 'blue',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

// let makeWords = () => {
// 	const elements = words().names.map(item => {
// 		return <li> {item.word} </li>
// 	})
// }

const Sprint = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
	
		
				<MainGame/>

		</div>
	)
}

export default Sprint
