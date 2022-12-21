import React from "react";
import { useSelector } from "react-redux";



const AsidePost = ({author}) => {


    const readingToday = useSelector((state) => Object.values(state.entities.posts))
    // const someone = useSelector((state) => Object.values(state.entities.posts)[0].author)
    // console.log("someone",someone)
    return (
        <aside className="right-aside">
            <div className="right-side-container">
                <div className="right-inside-container">
                    <div className="membership-right-button">
                        <a href="https://leonelcolinatang.github.io/" target="_blank">Get to know the developer</a>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-flex-container">
                        <span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="rgba(8, 8, 8, 1)"><path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path></svg>
                        </span>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="post-author">
                    <div className="single-post-author-pic">
                        <img src={window.kyle} />
                    </div>
                    <div className="single-post-author-name">
                        {author}
                    </div>
                    <div className="post-author-followers">

                    </div>
                    <div className="post-author-follow">
                        <button>Follow</button>
                    </div>
                </div>


                <div className="reading-today">
                    <a href="#">
                        <h2>More from Medium</h2>
                    </a>
                    {readingToday.slice(0, 3).map((post, idx) => {
                        return (
                            <div key={idx} className="today-post">
                                <div>
                                    <div className="today-author-pic">
                                        <a href="#">
                                            <img src={window.smallLinkedinLogo} />
                                        </a>
                                    </div>
                                    <div className="today-author-name">
                                        <a href="#">
                                            {post.author}
                                        </a>
                                    </div>
                                </div>
                                <div className="today-author-title">
                                    <a href="#">
                                        {post.title}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="right-side-footer">
                    <div><a href="https://www.linkedin.com/in/leonel-colina/" target="_blank">LinkedIn</a></div>
                    <div><a href="https://github.com/LeonelColinaTang" target="_blank">Github</a></div>
                    <div><a href="https://angel.co/u/leonel-colina" target="_blank">AngelList</a></div>
                    <div><a href="https://leonelcolinatang.github.io/" target="_blank">Portfolio</a></div>
                </div>
            </div>
        </aside>
    )
}

export default AsidePost;