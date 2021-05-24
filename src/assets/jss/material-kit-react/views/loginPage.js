import { container } from '@/assets/jss/materialKitReact'

const signupPageStyle = {
	container: {
		...container,
		zIndex: '2',
		position: 'relative',
		paddingTop: '4rem',
		color: '#FFFFFF',
		paddingBottom: '4rem',
	},
	cardHidden: {
		opacity: '0',
		transform: 'translate3d(0, -60px, 0)',
	},
	pageHeader: {
		minHeight: '100vh',
		height: 'auto',
		display: 'inherit',
		position: 'relative',
		margin: '0',
		padding: '0',
		border: '0',
		alignItems: 'center',
		'&:before': {
			background: 'rgba(0, 0, 0, 0.5)',
		},
		'&:before,&:after': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: '""',
		},
		'& footer li a,& footer li a:hover,& footer li a:active': {
			color: '#FFFFFF',
		},
		'& footer': {
			position: 'absolute',
			bottom: '0',
			width: '100%',
		},
	},
	form: {
		margin: '0',
	},
	cardHeader: {
		width: 'auto',
		textAlign: 'center',
		marginLeft: '20px',
		marginRight: '20px',
		marginTop: '-40px',
		padding: '20px 0',
		marginBottom: '15px',
	},
	cardHeaderTitle: {
		fontSize: '1.8rem'
	},
	cardBody: {
		padding: '1.9375rem 2.875rem',
	},
	socialIcons: {
		maxWidth: '24px',
		marginTop: '0',
		width: '100%',
		transform: 'none',
		left: '0',
		top: '0',
		height: '100%',
		lineHeight: '41px',
		fontSize: '20px',
	},
	divider: {
		marginTop: '30px',
		marginBottom: '0px',
		textAlign: 'center',
	},
	dividerBottom: {
		margin: '15px 0px',
		textAlign: 'center',
	},
	cardFooterRegistration: {
		border: '0',
		// borderRadius: '6px',
		justifyContent: 'center !important',
		padding: '1.9375rem 2.875rem',
		paddingTop: '0rem',
	},
	cardFooterLogin: {
		border: '0',
		// borderRadius: '6px',
		display: 'block',
		textAlign: 'center',
		padding: '1.9375rem 2.875rem',
		paddingTop: '0rem',
	},
	authBtn: {
		fontSize: '1.5rem'
	},
	socialLine: {
		marginTop: '1rem',
		textAlign: 'center',
		padding: '0',
	},
	inputIconsColor: {
		color: '#495057',
		width: '1.5em',
    height: '1.5em',
	},
}

export default signupPageStyle
