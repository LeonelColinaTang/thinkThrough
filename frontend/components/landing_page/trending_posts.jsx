import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../actions/post_actions";


const trendingPosts = () => {


    useEffect(() =>{
        getAllPosts()
    },[])


    const allPosts = useSelector((state) => {
        return Object.values(state.entities.posts)
    });
    
    console.log("ALL POSTS",allPosts)
    
    return(
        <div className="main-trending-container">
            <div className="trending-container">
                <div id="trending-title-container">
                    <img src={window.smallTrendingLogo} /> <p>trending on thinkThrough</p>
                </div>
            </div>
            <div  className="trending-posts-container">
            {allPosts.slice(0,6).map((post,idx) => {
                return(
                    <div key={idx} className="trending-post">
                        <div className="post-counter-container">
                            {}
                        </div>
                        <div className="post-info-container">
                            <div className="creator-trending-post">
                                <img src={window.smallTrendingLogo} />
                                <a href="#">{post.author}</a>
                            </div>
                            <div className="title-trending-post">
                                <a href="#">{post.title}</a>
                            </div>
                            <div className="time-info-trending-post">
                                <div>{post.date}</div>
                                <div className="dot-container">
                                    .
                                </div>
                                <div>{post.length}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )

};

export default trendingPosts;