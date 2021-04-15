import { connect } from 'react-redux'
import RegistrationPage from '@/pages/RegistrationPage'

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
			dispatch({ type: 'SET_USER_AUTH', userAuth })
		}
	}
}

const ContainerRegistrationPage = connect(
	mapStateToProperties,
	mapDispatchToProperties,
)(RegistrationPage)

export default ContainerRegistrationPage
