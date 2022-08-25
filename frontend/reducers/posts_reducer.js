import { RECEIVE_ALL_POSTS, RECEIVE_ONE_POST } from "../actions/post_actions";

const postsReducer = (state={}, action) =>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_ONE_POST:
            const singlePost = {[action.post.id]: action.post};
            return Object.assign({}, state, singlePost);
        default:
            return state;
    }
}

export default postsReducer;