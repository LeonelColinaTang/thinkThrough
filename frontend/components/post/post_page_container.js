import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostPage from "./post_page";

import { fetchOnePost } from "../../util/posts_api_util";



const mapStateToProps = (state, {match}) =>{
    
    let postId = parseInt(match.params.id);
    let entirePost = state.entities.posts[match.params.id]
    console.log(state.entities.posts)
    console.log(entirePost)

    return{
        postId: postId,
        entirePost
    }
};

const mapDispatchToProps = (dispatch) =>({

    fetchOnePost: (postId) => dispatch(fetchOnePost(postId))

});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage))