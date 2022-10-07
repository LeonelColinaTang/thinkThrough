import { fetchAllComments, createComment, updateComment, deleteComment } from "../util/comments_api_util";
import { receiveErrors } from "./session_actions";

//action constants
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_ONE_COMMENT = 'RECEIVE_ONE_COMMENT';
export const RECEIVE_COMMENTS_ERRORS = 'RECEIVE_COMMENTS_ERRORS';
export const REMOVE_ONE_COMMENT = 'REMOVE_ONE_COMMENT';


//Actions
export const receiveAllComments = (comments) =>({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

export const receiveOneComment = (comment) =>({
    type: RECEIVE_ONE_COMMENT,
    comment
});

export const receiveCommentsErrors = (errors) =>({
    tpye: RECEIVE_COMMENTS_ERRORS,
    errors
});

export const removeOneComment = (id) => ({
    type: REMOVE_ONE_COMMENT,
    id
});

//Action thunk creators
export const createOneComment = (comment) => (dispatch)=>(
    createComment(comment)
    .then(comment =>(
        dispatch(receiveOneComment(comment))
    ), errors =>(
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const updateOneComment = (comment) => (dispatch)=>(
    updateComment(comment)
    .then(comment => (
        dispatch(receiveOneComment(comment))
    ), errors =>(
        dispatch(receiveErrors(errors.responsJSON))
    ))
);

export const deleteOneComment = (id) => (dispatch)=>(
    deleteComment(id)
    .then((id)=> dispatch(removeOneComment(id)))
);

export const getAllComments = () => dispatch =>(
    fetchAllComments()
    .then(comments => dispatch(receiveAllComments(comments)))
);