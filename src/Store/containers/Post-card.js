import { connect } from 'react-redux'
import { deletePost } from '../actions'

import Home from '../../Components/post-card'

const mapStateToProps = (state, ownProps) => ({
    user: state.Users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => {
        dispatch(deletePost(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
