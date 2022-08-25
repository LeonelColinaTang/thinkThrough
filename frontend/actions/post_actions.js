import {fetchAllPosts, fetchOnePost, createPost, updatePost, deletePost} from "../util/posts_api_util";
import { receiveErrors } from "./session_actions";

//action constants
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";

export const receiveAllPosts = (posts) =>({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receiveOnePost = (post) =>({
    type: RECEIVE_ONE_POST,
    post
})

export const receivePostsErrors = (errors) =>({
        type: RECEIVE_POSTS_ERRORS,
        errors
})

//Action thunk creators
export const createOnePost = (post) => (dispatch) =>(
    createPost(post)
    .then(post => (
        dispatch(receiveOnePost(post))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
);

export const updateOnePost = (post) => (dispatch) => (
    updatePost(post)
    .then(post => (
        dispatch(receiveOnePost(post))
    ), errors =>(
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const deleteOnePost = (post) => (dispatch) => (
    deletePost(post)
    .then(() => dispatch(receiveOnePost()))
)

export const getAllPosts = () => dispatch =>(
    fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const getOnePost = (id) => dispatch =>(
    fetchOnePost(id)
    .then(post => dispatch(receiveOnePost(post)))
)