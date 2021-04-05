import { connect } from 'react-redux'
import Home from '@/pages/Home'

const mapStateToProperties = state => {
	console.log('ConatainerApp state', state)
	return {
		name: state.auth.name,
	}
}

const mapDispatchToProperties = dispatch => {
	return {
		addName: name => {
			dispatch({ type: 'ALL', name })
		},
	}
}

const ContainerHome = connect(
	mapStateToProperties,
	mapDispatchToProperties,
)(Home)

export default ContainerHome
