import { connect } from 'react-redux'
import { addUser } from '../actions'

import SignUp from '../../Pages/SignUp'

const mapStateToProps = (state, ownProps) => ({
    users: state.Users.usersList
});

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => {
        dispatch(addUser(user))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
