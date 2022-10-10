import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ONE_POST } from "../actions/post_actions";

const likesReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {...state}

    switch(action.type){
        case RECEIVE_LIKE:
            return action.like;
        case REMOVE_LIKE:
            debugger
            delete nextState[action.id];
            return nextState;
        case RECEIVE_ONE_POST:
            return action.post.likes ? action.post.likes : {};
        default:
            return state;
    }
}

export default likesReducer;