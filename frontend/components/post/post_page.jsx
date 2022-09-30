import React from "react";
import moment from 'moment';


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
            <div className="post-page-div">
                <div className="author-info-header">
                    <div className="author-avatar">
                        <img src={window.kyle} />
                    </div>
                    <div className="author-info">
                        <div className="author-name">
                            {/* <h3>{entirePost.author}</h3> */}
                            <h3>Kyle Ginzburg</h3>
                        </div>
                        <div className="post-div-time">
                            <p>{moment(post.created_at).format('MMMM D')}</p>
                            <p>.</p>
                            <p>{post.length}</p>
                        </div>
                    </div>
                </div>
                <div className="entire-post-title">
                    <h1>{post.title}</h1>
                </div>
                <div className="post-big-image">
                    {/* here goes the image */}
                    <img src={window.postPicture} />
                </div>
                <div className="entire-post-body">
                    <p>{post.body}</p>
                        <p>lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a?</p>
                </div>
            </div>
        )
    }





}

export default PostPage;