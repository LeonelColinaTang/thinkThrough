import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostPage from "./post_page";

import { getOnePost } from "../../actions/post_actions";

const mapStateToProps = (state, {match}) =>{
    return{
        postId: parseInt(match.params.postId),
    }
};

const mapDispatchToProps = (dispatch) =>({

    getOnePost: (postId) => dispatch(getOnePost(postId))

});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage))