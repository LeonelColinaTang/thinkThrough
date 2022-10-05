import { RECEIVE_ALL_COMMENTS, RECEIVE_ONE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {...state}

    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.posts;
        case RECEIVE_ONE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        default:
            return state;
    }

}

export default commentsReducer;