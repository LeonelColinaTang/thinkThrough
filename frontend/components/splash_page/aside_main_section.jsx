import React from "react";

const AsideMainSection = () =>{

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
        <aside className="right-aside">
            <div className="right-side-container">
                <div className="right-inside-container">
                    <div className="membership-right-button">
                        <a href="#">become a member</a>
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
                <div className="reading-today">
                    <a href="#">
                        <span></span>
                        <h2>what we're reading today</h2>
                    </a>
                    {[1, 2, 3].map((num, idx) => {
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
                                            {POSTMOCK[num].author}
                                        </a>
                                    </div>
                                </div>
                                <div className="today-author-title">
                                    <a href="#">
                                        {POSTMOCK[num].title}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a href="#">See the full list</a>




                <div className="reading-today">
                    <a href="#">
                        <h2>recently saved</h2>
                    </a>
                    {[1, 2, 3, 4].map((num, idx) => {
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
                                            {POSTMOCK[num].author}
                                        </a>
                                    </div>
                                </div>
                                <div className="today-author-title">
                                    <a href="#">
                                        {POSTMOCK[num].title}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a href="#">See all ({Object.values(POSTMOCK).length})</a>
                <div className="right-side-footer">
                    <div><a href="#">Help</a></div>
                    <div><a href="#">Status</a></div>
                    <div><a href="#">Writers</a></div>
                    <div><a href="#">Blog</a></div>
                    <div><a href="#">Careers</a></div>
                    <div><a href="#">Privacy</a></div>
                    <div><a href="#">Terms</a></div>
                    <div><a href="#">About</a></div>
                    <div><a href="#">Knowable</a></div>
                </div>
            </div>
        </aside>
    )
}

export default AsideMainSection;