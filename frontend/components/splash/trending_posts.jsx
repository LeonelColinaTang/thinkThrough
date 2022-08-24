import React from "react";

const trendingPosts = ({ currentUser }) => {


    const POSTMOCK = {
        1: {
            author: "Kyle Ginzburg",
            title: "How not to kill your cohort",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            tag: "self-control",
            length: "125 min read"
        },
        2: {
            author: "Amin Babar",
            title: "How to encourage students that suck",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            tag: "happiness",
            length: "35 min read"
        },
        3: {
            author: "Ben 'The Hosk' Hosking",
            title: "Agile Projects Have Become Waterfall Projects With Sprints",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 17",
            tag: "water",
            length: "4 min read"
        },
        4: {
            author: "Michael Shen",
            title: "Radiation is cool",
            body: "lorem ipsum whatever I don't remember",
            date: "Jul 17",
            tag: "random",
            length: "64 min read"
        },
        5: {
            author: "Louis Lane",
            title: "Supes ain't it",
            body: "lorem ipsum whatever I don't remember",
            date: "Sep 4",
            tag: "superhero",
            length: "5 min read"
        },
        6: {
            author: "Vivian Polonski",
            title: "I bought a plant",
            body: "lorem ipsum whatever I don't remember",
            tag: "loneliness",
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
                                <a href="#">{post.author}</a>
                            </div>
                            <div className="title-trending-post">
                                <a href="#">{post.title}</a>
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