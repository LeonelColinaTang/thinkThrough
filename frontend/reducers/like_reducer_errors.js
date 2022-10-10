import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKE_ERRORS } from "../actions/like_actions";

export default (state={}, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LIKE:
            return {};
        case REMOVE_LIKE:
            return {};
        case RECEIVE_LIKE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};