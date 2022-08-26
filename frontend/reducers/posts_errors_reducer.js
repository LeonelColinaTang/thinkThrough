import { RECEIVE_ALL_POSTS, RECEIVE_ONE_POST, RECEIVE_POSTS_ERRORS } from "../actions/post_actions";

export default (state={}, action) =>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return {};
        case RECEIVE_ONE_POST:
            return {};
        case RECEIVE_POSTS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};