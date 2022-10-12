import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

 class InfinitePosts extends React.Component {
  
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getAllPosts();
    }

    render(){
        const {posts} = this.props;

        return(
            <div className="outer-infinite-posts-container">
                <div className="inner-infinite-posts-container">
                    <div className="infinite-posts-grid-container">
                        <div className="infinite-posts-grid">
                            <section className="infinite-posts">
                                {Object.values(posts).map((post, idx) => {
                                    return (
                                        <div key={idx} className="infinite-post">
                                            <div className="post-info-container">
                                                <div className="post-pic-container">
                                                    <div className="post-left-info">
                                                        <div className="author-pic-name-container">
                                                            <div className="author-pic-name">
                                                                <a href="#" className="author-small-pic">
                                                                    <img src={window.kyle} />
                                                                </a>
                                                                <div className="author-small-name">
                                                                    <a href="#" className="author-small-name-link">
                                                                        <h4>{post.author}</h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <Link to={`/posts/${post.id}`} className="title-description-link">
                                                                <h2 className="infinite-post-title">
                                                                    {post.title}
                                                                </h2>
                                                                <div className="infinite-post-description">
                                                                    <h3>{post.body}...</h3>
                                                                </div>
                                                                </Link>
                                                        </div>
                                                        <div className="infinite-post-date-time-save-container">
                                                            <div className="infinite-post-date-time">
                                                                <span>{moment(post.created_at).format('MMMM D')}</span>
                                                                <div><span>.</span></div>
                                                                <span>{post.length}</span>
                                                            </div>
                                                            <div className="infinite-post-save">
                                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                                    <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="post-right-pic">
                                                        <img src={window.smallLinkedinLogo} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </section>
                            <aside className="tags-footer-container">
                                <div className="side-container">
                                    <div className="discover-what-matters-container">
                                        <div className="discover-title">
                                            <p>discover more of what matters to you</p>
                                        </div>
                                        <div className="discover-interests">
                                            {Object.values(posts).slice(0,10).map((post, idx) => {
                                                return (
                                                    <a href="#" key={idx} className="side-interest">
                                                        <div>
                                                            {post.tag}
                                                        </div>
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="side-footer-links">
                                        <div className="footer-link">
                                            <a href="https://www.linkedin.com/in/leonel-colina-455531118/" target="_blank">LinkedIn</a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="https://github.com/leonel040792" target="_blank">Github</a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="https://angel.co/u/leonel-colina" target="_blank">AngelList</a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">Portfolio</a>
                                        </div>
    
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default InfinitePosts;