import * as user from '../constants/UserActions'
import * as post from '../constants/PostActions'



export const addPost = payload => ({ type: post.ADD_POST, payload });
export const deletePost = id => ({ type: post.DELETE_POST, id });
export const editPost = (payload) => ({ type: post.EDIT_POST, payload });

export const addUser = (payload) => ({ type: user.ADD_USER, payload });
export const setUser = (payload) => ({ type: user.SET_USER, payload });
export const logout = () => ({ type: user.LOGOUT });

