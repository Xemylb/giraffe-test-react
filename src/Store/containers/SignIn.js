import { connect } from 'react-redux'
import { setUser } from '../actions'

import SignIn from '../../Pages/SignIn'

const mapStateToProps = (state, ownProps) => ({
    users: state.Users.usersList
});

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => {
        dispatch(setUser(user))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
