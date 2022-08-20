import React from "react";

const trendingPosts = ({ currentUser }) => {


    const POSTMOCK = {
    5: {
        author: "Kyle Ginzburg",
        title: "How not to kill your cohort",
        date: "Aug 19",
        length: "125 min read"
    },
    6: {
        author: "Amin Babar",
        title: "How to encourage students that suck",
        date: "Aug 19",
        length: "35 min read"
        },
    1: {
        author: "Ben 'The Hosk' Hosking",
        title: "Agile Projects Have Become Waterfall Projects With Sprints",
        date: "Aug 17",
        length: "4 min read"
    },
    2:{
        author: "Michael Shen",
        title: "Radiation is cool",
        date: "Jul 17",
        length: "64 min read"
    },
    3:{
        author: "Louis Lane",
        title: "Supes ain't it",
        date: "Sep 4",
        length: "5 min read"
    },
    4:{
        author: "Vivian Polonski",
        title: "I bought a plant",
        date: "May 7",
        length: "4 min read"
    }
}
     

    const topSix = () => (
        <div className="main-trending-container">
            <div className="trending-container">
                <div id="trending-title-container">
                    <img src={window.smallTrendingLogo} /> <p>trending on thinkThrough</p>
                </div>
            </div>
            <div  className="trending-posts-container">
            {Object.values(POSTMOCK).map((post,idx) => {
                return(
                    <div key={idx} className="trending-post">
                        <div className="post-counter-container">
                            {}
                        </div>
                        <div className="post-info-container">
                            <div className="creator-trending-post">
                                <img src={window.smallTrendingLogo} />
                                {post.author}
                            </div>
                            <div className="title-trending-post">
                                {post.title}
                            </div>
                            <div className="time-info-trending-post">
                                <div>{post.date}</div>
                                <div className="dot-container">
                                    {/* <span>.</span> */}
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
    );

    const emptyDiv = () => (
        <>
        </>
    );
    return (currentUser ? emptyDiv() : topSix(currentUser));
    // Here it will be a different component
};

export default trendingPosts;