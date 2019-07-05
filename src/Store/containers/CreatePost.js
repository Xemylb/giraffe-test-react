import { connect } from 'react-redux'
import { addPost } from '../actions'

import CreatePost from '../../Pages/CreatePost'

const mapStateToProps = (state, ownProps) => ({
    user: state.Users.currentUser,
    posts: state.Posts
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => {
        dispatch(addPost(post))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost)
