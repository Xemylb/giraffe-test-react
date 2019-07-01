import { connect } from 'react-redux'
import { addPost } from '../actions'

import Post from '../../Pages/Post'

const mapStateToProps = (state, ownProps) => ({
    redux: state,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (post) => {
        dispatch(addPost(post))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)
