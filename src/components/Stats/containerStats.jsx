import { connect } from "react-redux";
import Stats from './Stats'


let mapStateToProps = (state) => {
    return {
        userAuth: state.userAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}
const ContainerProducts = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default ContainerProducts;
