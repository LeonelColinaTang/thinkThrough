import { signup, login, logout } from "../util/session_api_util";

//action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//Action creators
export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
})


//Action thunk creators
export const createUser = (user) => (dispatch) => (
    signup(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
);

export const loginUser = (user) => (dispatch) => (
    login(user)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logoutUser = () => (dispatch) => (
    logout()
    .then(()=> dispatch(logoutCurrentUser()))
);