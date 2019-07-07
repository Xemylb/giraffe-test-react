import { connect } from 'react-redux'
import { addUser } from '../actions'

import PrivateRoute from '../../Components/privateRoute'

const mapStateToProps = (state, ownProps) => ({
    isAuth: state.Users.isAuth
});

// const mapDispatchToProps = (dispatch) => ({
//     addUser: (user) => {
//         dispatch(addUser(user))
//     }
// });

export default connect(
    mapStateToProps
)(PrivateRoute)
