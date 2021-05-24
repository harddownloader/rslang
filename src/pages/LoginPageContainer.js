import { connect } from 'react-redux'
import LoginPage from '@/pages/LoginPage'

const mapStateToProperties = state => {
	console.log('registration container state', state)
	return {
		userId: state.userId,
    token: state.userId
	}
}

const mapDispatchToProperties = dispatch => {
	return {
		setUserAuth: userAuth => {
			console.log('LoginPageContainer userAuth', userAuth)
			dispatch({ type: 'SET_USER_AUTH', userAuth })
		}
	}
}

const ContainerLoginPage = connect(
	mapStateToProperties,
	mapDispatchToProperties,
)(LoginPage)

export default ContainerLoginPage
