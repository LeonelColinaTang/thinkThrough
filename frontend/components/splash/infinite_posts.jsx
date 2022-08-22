import React from "react";

const InfinitePosts = ({ currentUser }) => {
    const POSTMOCK = {
        5: {
            author: "Kyle Ginzburg",
            title: "How not to kill your cohort",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            length: "125 min read"
        },
        6: {
            author: "Amin Babar",
            title: "How to encourage students that suck",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            length: "35 min read"
        },
        1: {
            author: "Ben 'The Hosk' Hosking",
            title: "Agile Projects Have Become Waterfall Projects With Sprints",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 17",
            length: "4 min read"
        },
        2: {
            author: "Michael Shen",
            title: "Radiation is cool",
            body: "lorem ipsum whatever I don't remember",
            date: "Jul 17",
            length: "64 min read"
        },
        3: {
            author: "Louis Lane",
            title: "Supes ain't it",
            body: "lorem ipsum whatever I don't remember",
            date: "Sep 4",
            length: "5 min read"
        },
        4: {
            author: "Vivian Polonski",
            title: "I bought a plant",
            body: "lorem ipsum whatever I don't remember",
            date: "May 7",
            length: "4 min read"
        }
    }

    const infinitePosts = () => (
        <>
        <div className="outer-infinite-posts-container">
            <div className="inner-infinite-posts-container">
                <div className="infinite-posts-grid-container">
                    <div className="infinite-posts-grid">
                        <section className="infinite-posts">
                            {/* ----------------------- */}
                                {Object.values(POSTMOCK).map((post, idx) => {
                                    return (
                                        <div key={idx} className="infinite-post">
                                            <div className="post-info-container">

                                                <div className="post-pic-container">
                                                    <div className="post-left-info">
                                                        <div className="author-pic-name-container">
                                                            <div className="author-pic-name">
                                                                <a href="#" className="author-small-pic"> 
                                                                    <img src={window.smallLinkedinLogo} /> 
                                                                </a>
                                                                <div className="author-small-name">
                                                                    <a href="#" className="author-small-name-link">
                                                                        <h4>{post.author}</h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title-description-link">
                                                                <h2 className="infinite-post-title">
                                                                    {post.title}
                                                                </h2>
                                                                <div className="infinite-post-description">
                                                                    <h3>{post.body}...</h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="infinite-post-date-time-save-container">
                                                            <div className="infinite-post-date-time">
                                                                <span>{post.date}</span>
                                                                <div><span>.</span></div>
                                                                <span>{post.length}</span>
                                                            </div>
                                                            <div className="infinite-post-save">
                                                                
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
                            {/* ------------------------ */}
                        </section>
                        <aside className="tags-footer-container">

                        </aside>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

    const emptyDiv = () => (
        <>
        </>
    );
    return (currentUser ? emptyDiv() : infinitePosts(currentUser));
};

export default InfinitePosts;