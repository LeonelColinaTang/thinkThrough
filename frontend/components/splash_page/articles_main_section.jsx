import React from "react";
import ForYouMenu from "./foryou_menu";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../actions/post_actions";
import { Link } from "react-router-dom";


const ArticlesMainSection = ({filtered, setFiltered}) =>{


    const dispatch = useDispatch();

    
     useEffect(() => {
        dispatch(getAllPosts())
    }, [])


    const allPosts = useSelector((state) => {
        if (filtered){
            return Object.values(state.entities.posts).filter(post => post.user_id === state.session.id)
        }
        return Object.values(state.entities.posts)
    });

    window.allPosts = allPosts
    return(
        <main className="articles-container">
            <ForYouMenu />
            <div className="posts-index-container">
                {allPosts.map((post, idx) => {
                    return (
                        <article className="single-post" key={idx}>
                            <div className="single-post-container">
                                <div className="name-date-single-post-container">
                                    <div className="post-author-pic">
                                        <a href="#">
                                            <img src={window.smallLinkedinLogo} />
                                        </a>
                                    </div>
                                    <div className="post-author-name">
                                        <a href="#">
                                            {post.author}
                                        </a>
                                    </div>
                                    <div className="post-written-date">
                                        .{post.date}
                                    </div>
                                </div>
                                <div className="title-body-single-post-container">
                                    <Link to={`/posts/${post.id}`} >
                                        <div className="single-post-title">
                                            {post.title}
                                        </div>
                                        <div className="single-post-body">
                                            {post.body}
                                        </div>
                                    </Link>
                                </div>
                                <div className="time-save-container">
                                    <div >
                                        <div>{post.tag}</div>
                                        <div>{post.length}</div>
                                    </div>
                                    <div className="individual-post-save">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="single-post-image">
                                <img src={post.photoUrl ? post.photoUrl : window.smallGithubLogo} />
                            </div>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default ArticlesMainSection;

