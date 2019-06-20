import { connect } from 'react-redux'
import { addPost } from '../actions'

import Home from '../../Pages/Home'

const mapStateToProps = (state, ownProps) => ({
    home: state,
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => {
        dispatch(addPost(post))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
