import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ONE_POST } from "../actions/post_actions";

const likesReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {...state}

    switch(action.type){
        case RECEIVE_LIKE:
            // debugger
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            // debugger
            const likId= Object.values(nextState).filter(like => like.user_id === action.id);
            delete nextState[likId.id]
            return nextState;
        case RECEIVE_ONE_POST:
            return action.post.likes ? action.post.likes : {};
        default:
            return state;
    }
}

export default likesReducer;