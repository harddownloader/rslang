/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui core components
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'
import RsLogo from '@/assets/images/logo/rs_school_js.svg';

import styles from '@/assets/jss/material-kit-react/components/footerStyle'

const useStyles = makeStyles(styles)

export default function Footer(props) {
	const classes = useStyles()
	const { whiteFont } = props
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	})
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	})
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a
								href='https://github.com/Elwa36s'
								className={classes.block}
								target='_blank'>
								Дмитрий
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href='https://github.com/Exooo1'
								className={classes.block}
								target='_blank'>
								Влас
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href='https://github.com/Gypsynkov'
								className={classes.block}
								target='_blank'>
								Михаил
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href='https://github.com/SerhiiShevchenkoOo'
								className={classes.block}
								target='_blank'>
								Сергей
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href='https://github.com/harddownloader'
								className={classes.block}
								target='_blank'>
								Серафим
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					&copy; {1900 + new Date().getYear()} {' '}
					
					<a
						href='https://rs.school/js/'
						className={aClasses}
						target='_blank'>
						The Rolling Scopes School.
					</a>
					<a
						href='https://rs.school/js/'
						className={aClasses}
						target='_blank'>
						<p className={classes.iconWrap}>
							<RsLogo className={classes.icon} />
						</p>
					</a>
				</div>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	whiteFont: PropTypes.bool,
}
