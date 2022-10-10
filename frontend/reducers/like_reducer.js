import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {...state}

    switch(action.type){
        case RECEIVE_LIKE:
            return action.like;
        case REMOVE_LIKE:
            delete nextState[action.id];
            return nextState;
        default:
            return state;
    }
}

export default likesReducer;