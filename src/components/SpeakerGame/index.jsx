import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import useDataApi from '@/utils/useDataApi'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		width: '100%',
	},
}))

const Speaker = ({ query }) => {
	const classes = useStyles()
	const [
		{ data, isLoading, isError },
		doFetch, // eslint-disable-line no-unused-vars
	] = useDataApi(`https://rs-lang-app.herokuapp.com/words?group=${query}`, [])
	return (
		<div className={classes.root}>
			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<ul>
					{data.map(item => (
						<p key={item.word}>{item.word} </p>
					))}
				</ul>
			)}
		</div>
	)
}

Speaker.propTypes = {
	query: PropTypes.string,
}

export default Speaker
