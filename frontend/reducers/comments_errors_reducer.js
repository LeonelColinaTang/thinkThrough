import { RECEIVE_ALL_COMMENTS, RECEIVE_ONE_COMMENT, RECEIVE_COMMENTS_ERRORS } from "../actions/comment_actions";

export default (state={}, action) =>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return {};
        case RECEIVE_ONE_COMMENT:
            return {};
        case RECEIVE_COMMENTS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};