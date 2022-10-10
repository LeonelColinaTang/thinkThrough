import { combineReducers } from "redux";
import users from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import likesReducer from "./like_reducer";

export default combineReducers({
    users,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
});

