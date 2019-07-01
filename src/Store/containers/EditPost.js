import { connect } from 'react-redux'
import { addPost } from '../actions'

import EditPost from '../../Pages/EditPost'

const mapStateToProps = (state, ownProps) => ({
    redux: state,
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => {
        dispatch(addPost(post))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPost)
