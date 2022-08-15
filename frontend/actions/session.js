import { signup, login, logout } from "../util/session";
//we import them because we'll need them in the thunk action creators

//action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

//Action creators
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
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