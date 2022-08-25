import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import posts from './modal_reducer';

export default combineReducers({
    session,
    posts
})

