import { combineReducers } from "redux";
import users from "./users_reducer";
import postsReducer from "./posts_reducer";

export default combineReducers({
    users,
    posts: postsReducer
});

