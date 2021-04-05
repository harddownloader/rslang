import { connect } from "react-redux";
import Home from '@/pages/Home'

const mapStateToProps = (state) => {
  console.log('ConatainerApp state', state)
  return {
    name: state.auth.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => {
      dispatch({type: 'ALL', name})
    }
  }
}

const ContainerHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default ContainerHome;
