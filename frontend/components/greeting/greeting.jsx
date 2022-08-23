import React from "react";

const Greeting = ({currentUser, logout, openModal}) =>{

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



    const sessionLinks = () => (
        <nav className="nav-header">
            <a href="#" className="think-through small-logo"><img src={window.smallMediumLogo} /><span>Thinkthrough</span></a>
        <div className="login-signup">
            <a href="https://www.linkedin.com/in/leonel-colina-455531118/" target="_blank"><img src={window.smallLinkedinLogo} className="small-logo"/></a>
            <a href="https://github.com/leonel040792" target="_blank"><img src={window.smallGithubLogo} className="small-logo" /></a>
            <a href="#" ><img src={window.smallAngelistLogo} className="small-logo" /></a>
            <a href="#" onClick={() => openModal('login')} id="login-navbar-link">Sign in</a>
            <button onClick={() => openModal('signup')} className="get-started-button">Get Started</button>
        </div>
        </nav>
    );

    const personalGreeting = () => (
        <>
        <div className="nav-logged-in-container">
            <nav className="logged-in-nav">
                <div className="buttons-container">
                    <div>
                        <a href="#" className="think-through small-logo">
                            <svg viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                        </a>
                    </div>
                    <div className="navbar-icons-logged-in">
                        <div className="left-navbar-icons-container">
                            <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"></path><path d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
                        </div>
                        <div className="left-navbar-icons-container">
                            <a href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications"><path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" strokeLinecap="round"></path><path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                        <div className="left-navbar-icons-container">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" strokeLinecap="round"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" strokeLinecap="round"></path></svg>
                            </a>
                        </div>
                        <div className="left-navbar-icons-container">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" strokeLinecap="round"></path></svg>
                            </a>
                        </div>
                        <div className="left-navbar-white-space">
                            <hr />
                        </div>
                        <div className="left-navbar-icons-container">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-profile-pic">
                        <a href="#" className="navbar-profile-link">
                            <img src={window.smallGithubLogo} />
                            <button className="header-button" onClick={logout}>Log Out</button>
                        </a>
                    </div>
                </div>
            </nav>

            {/* WHATEVER BELOW THIS LINE WILL GO IN A DIFFERENT COMPONENT */}

            <main className="articles-container">
                <div>
                    <div className="for-you-menu-padding"></div>
                    <div className="for-you-menu">
                        <div className="for-you-item">
                            <a href="#">
                                <svg width="19" height="19"><path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"></path></svg>
                            </a>
                        </div>
                        <div className="for-you-item">
                            <a href="#">for you</a>
                        </div>
                        <div className="for-you-item">
                            <a href="#">following</a>
                        </div>
                        <div className="for-you-item">
                            <a href="#">software engineering</a>
                        </div>
                        <div className="for-you-item">
                            <a href="#">machine learning</a>
                        </div>
                        <div className="for-you-item">
                            <a href="#">data science</a>
                        </div>
                    </div>
                </div>


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
            <aside>
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
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
        </>
    );
    return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
    // Here it will be a different component
};

export default Greeting;