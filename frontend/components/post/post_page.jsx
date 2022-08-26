import React, { useEffect } from "react";
import moment from 'moment';


class PostPage extends React.Component {
    constructor(props){
        super(props)
    }



    render(){

        const {entirePost} = this.props

        return(
            <> 

            <div className="post-page-div">
                <div className="author-info-header">
                    <div className="author-avatar">
                        {/* here goes the image of the person */}
                    </div>
                    <div className="author-info">
                        <div className="author-name">
                            <h3>{entirePost.author}</h3>
                        </div>
                        <div className="post-div-time">
                            <p>{moment(entirePost.created_at).format('MMMM D')}</p>
                            <p>{entirePost.lenght}</p>
                        </div>
                    </div>
                </div>
                <div className="entire-post-tile">
                    <h1>{entirePost.title}</h1>
                </div>
                <div className="post-big-image">
                    {/* here goes the image */}
                </div>
                <div className="entire-post-body">
                    <p>{entirePost.body}</p>
                </div>
            </div>

            </>
        )
    }





}

export default PostPage;