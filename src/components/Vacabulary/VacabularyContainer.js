import { connect } from 'react-redux'
import Vacabulary from '@/components/Vacabulary'

const mapStateToProperties = (state, ownProps) => {
	return {
		userAuth: state.userAuth
	}
}

const mapDispatchToProperties = dispatch => {
	return {}
}

const ContainerVacabulary = connect(
	mapStateToProperties,
	mapDispatchToProperties,
)(Vacabulary)

export default ContainerVacabulary
