import { connect } from 'react-redux'
import { logout } from '../actions'

import Header from '../../Components/header'

const mapStateToProps = (state, ownProps) => ({
    user: state.Users.currentUser,
    isAuth: state.Users.isAuth
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
