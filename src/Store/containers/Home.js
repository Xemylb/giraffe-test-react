import { connect } from 'react-redux'

import Home from '../../Pages/Home'

const mapStateToProps = (state, ownProps) => ({
    state: state,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     setFilter: () => {
//         dispatch(setVisibilityFilter(ownProps.filter))
//     }
// })

export default connect(
    mapStateToProps,
)(Home)
