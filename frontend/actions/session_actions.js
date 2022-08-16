import { signup, login, logout } from "../util/session";

//action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//Action creators
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_CURRENT_USER,
    errors,
})


//Action thunk creators
export const createUser = (user) => (dispatch) => (
    signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const loginUser = (user) => (dispatch) => (
    login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => (dispatch) => (
    logout()
    .then(()=> dispatch(logoutCurrentUser()))
);