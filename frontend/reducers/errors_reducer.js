import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import posts from './modal_reducer';
import comments from './comments_errors_reducer';
import likes from "./like_reducer_errors";

export default combineReducers({
    session,
    posts,
    comments,
    likes,
})

