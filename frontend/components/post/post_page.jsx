import React from "react";
import Post from "./post";
import LoggedInNav from "../splash_page/logged_in_nav";
import AsidePost from "./aside_post";

class PostPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        this.props.getOnePost(this.props.postId)
            .then((post) => {
                this.setState({ post: post.post })
            });
    }


    render(){

        const {post} = this.state;
        return(
            <div className="post-main-container">
                <LoggedInNav />
                <Post post={post} />
                <AsidePost/>
            </div>
        )
    }





}

export default PostPage;