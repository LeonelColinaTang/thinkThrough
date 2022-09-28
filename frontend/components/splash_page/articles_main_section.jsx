import React from "react";
import ForYouMenu from "./foryou_menu";

const ArticlesMainSection = () =>{

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

    return(
        <main className="articles-container">
            <ForYouMenu />
            <div className="posts-index-container">
                {Object.values(POSTMOCK).map((post, idx) => {
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
                                    <a href="#">
                                        <div className="single-post-title">
                                            {post.title}
                                        </div>
                                        <div className="single-post-body">
                                            {post.body}
                                        </div>
                                    </a>
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
                                <img src={window.smallGithubLogo} />
                            </div>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default ArticlesMainSection;

