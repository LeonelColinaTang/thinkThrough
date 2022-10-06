import { RECEIVE_ALL_COMMENTS, RECEIVE_ONE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ONE_POST } from "../actions/post_actions";

const commentsReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {...state}

    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.posts;
        case RECEIVE_ONE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case RECEIVE_ONE_POST:
            return action.post.comments ? action.post.comments : {};
        default:
            return state;
    }

}

export default commentsReducer;