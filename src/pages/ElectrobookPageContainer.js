import { connect } from "react-redux";
import ElectrobookPage from '@/pages/ElectrobookPage'

let mapStateToProps = (state) => {
  return {
    userAuth: state.userAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const ElectroBook = connect(mapStateToProps, mapDispatchToProps)(ElectrobookPage);

export default ElectroBook;
