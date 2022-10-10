import { createLike, deleteLike } from "../util/likes_api_util";
import { receiveErrors } from "./session_actions";

//action constants
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

//Actions
export const receiveLike = (like) =>({
    type: RECEIVE_LIKE,
    like
})

export const removeLike = (id) =>({
    type: REMOVE_LIKE,
    id
})

export const receiveLikeErrors = (errors) =>({
    type: RECEIVE_LIKE_ERRORS,
    errors
})

//Action thunk creators
export const addLike = like => dispatch =>(
    createLike(like)
    .then(res =>(
        dispatch(receiveLike(res))
    ), errors => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const unLike = id => dispatch =>(
    deleteLike(id)
    .then((id) => dispatch(removeLike(id)))
)