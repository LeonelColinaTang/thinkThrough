import React from "react";

const InfinitePosts = ({ currentUser }) => {
    const POSTMOCK = {
        5: {
            author: "Kyle Ginzburg",
            title: "How not to kill your cohort",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            tag: "self-control",
            length: "125 min read"
        },
        6: {
            author: "Amin Babar",
            title: "How to encourage students that suck",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 19",
            tag: "happiness",
            length: "35 min read"
        },
        1: {
            author: "Ben 'The Hosk' Hosking",
            title: "Agile Projects Have Become Waterfall Projects With Sprints",
            body: "lorem ipsum whatever I don't remember",
            date: "Aug 17",
            tag: "water",
            length: "4 min read"
        },
        2: {
            author: "Michael Shen",
            title: "Radiation is cool",
            body: "lorem ipsum whatever I don't remember",
            date: "Jul 17",
            tag: "random",
            length: "64 min read"
        },
        3: {
            author: "Louis Lane",
            title: "Supes ain't it",
            body: "lorem ipsum whatever I don't remember",
            date: "Sep 4",
            tag: "superhero",
            length: "5 min read"
        },
        4: {
            author: "Vivian Polonski",
            title: "I bought a plant",
            body: "lorem ipsum whatever I don't remember",
            tag: "loneliness",
            date: "May 7",
            length: "4 min read"
        }
    }

    const infinitePosts = () => (
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
                            {/* ------------------------ */}
                        </section>
                        <aside className="tags-footer-container">
                            <div className="side-container">
                                <div className="discover-what-matters-container">
                                    <div className="discover-title">
                                        <p>discover more of what matters to you</p>
                                    </div>
                                    <div className="discover-interests">
                                            {Object.values(POSTMOCK).map((post, idx) =>{
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
                                            <a href="#">
                                                Help
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Status
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Writers
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Blog
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Careers
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Privacy
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Terms
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                About
                                            </a>
                                        </div>
                                        <div className="footer-link">
                                            <a href="#">
                                                Knowable
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );

    const emptyDiv = () => (
        <>
        </>
    );
    return (currentUser ? emptyDiv() : infinitePosts(currentUser));
};

export default InfinitePosts;