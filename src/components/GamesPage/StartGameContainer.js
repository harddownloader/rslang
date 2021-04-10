import { connect } from 'react-redux'
import StartGame from '@/components/GamesPage/StartGame'

const mapStateToProperties = (state, ownProps) => {
	console.log('registration container state', state)
	console.log('registration container props', ownProps)
	return {
		// userId: state.auth.userId,
    // token: state.auth.userId
		userAuth: state.userAuth
	}
}

const mapDispatchToProperties = dispatch => {
	return {}
}

const ContainerStartGame = connect(
	mapStateToProperties,
	mapDispatchToProperties,
)(StartGame)

export default ContainerStartGame
