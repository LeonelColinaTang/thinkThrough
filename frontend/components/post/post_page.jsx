import React from "react";
import moment from 'moment';
import Post from "./post";
import LoggedInNav from "../splash_page/logged_in_nav";


class PostPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        this.props.getOnePost(this.props.postId);
    }


    componentWillMount() {
        this.props.getOnePost(this.props.postId);
    }
    
    componentWillReceiveProps(newState) {
        console.log("NEW STATE",newState)
        this.setState({ book: newState.entities.posts });
       
    }
    


    render(){

        const {post} = this.state;
        console.log(post)
        return(
            <div>
                <LoggedInNav />
                <Post post={post} />
            </div>
            

        )
    }





}

export default PostPage;