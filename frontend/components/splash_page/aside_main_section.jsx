import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AsideMainSection = ({setSearchText}) =>{


    const readingToday = useSelector((state)=>{
        return Object.values(state.entities.posts).sort(function () { return .5 - Math.random() });
    })

    const handleSearchText = (e) =>{
        console.log(e.target.value)
        setSearchText(e.target.value)
    }

    return(
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
                        <input type="text" placeholder="Search" onChange={handleSearchText}/>
                    </div>
                </div>
                <div className="reading-today">
                    <a href="#">
                        <span></span>
                        <h2>what we're reading today</h2>
                    </a>
                    {readingToday.slice(0,3).map((post, idx) => {
                        return (
                            <div key={idx} className="today-post">
                                <div>
                                    <div className="today-author-pic">
                                        <Link to={`/posts/${post.id}`} >
                                            <img src={window.smallLinkedinLogo} />
                                        </Link>
                                    </div>
                                    <div className="today-author-name">
                                        <Link to={`/posts/${post.id}`} >
                                            {post.author}
                                        </Link>
                                    </div>
                                </div>
                                <div className="today-author-title">
                                    <Link to={`/posts/${post.id}`} >
                                        {post.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a href="#">Get other posts</a>




                {/* <div className="reading-today">
                    <a href="#">
                        <h2>recently saved</h2>
                    </a>
                    {readingToday.slice(0,4).map((post, idx) => {
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
                <a href="#">See all ({readingToday.length})</a> */}
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

export default AsideMainSection;