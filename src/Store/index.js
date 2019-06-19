import { combineReducers } from 'redux'
import Posts from './reducers/Posts'
import Users from './reducers/Users'

const rootReducer = combineReducers({
    Posts,
    Users
});

export default rootReducer
