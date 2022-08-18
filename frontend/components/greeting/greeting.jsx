import React from "react";

const Greeting = ({currentUser, logout, openModal}) =>{

    const sessionLinks = () => (
        <>
            <a href="#" id="think-through"><img src={window.smallMediumLogo} className="small-logo" /><span>Thinkthrough</span></a>
        <nav className="login-signup">
            <a href="https://www.linkedin.com/in/leonel-colina-455531118/" target="_blank"><img src={window.smallLinkedinLogo} className="small-logo"/></a>
            <a href="https://github.com/leonel040792" target="_blank"><img src={window.smallGithubLogo} className="small-logo" /></a>
            <a href="#" ><img src={window.smallAngelistLogo} className="small-logo" /></a>
            <a href="#" onClick={() => openModal('login')} id="login-navbar-link">Login</a>
            <button onClick={() => openModal('signup')} id="get-started-button">Get Started</button>
        </nav>
        </>
    );

    const personalGreeting = () => (
        <nav className="nav-header">
            <h1 className="header-title">thinkThrough</h1>
            <div className="greeting-div">
                <h2 className="header-text">Hi, {currentUser.email}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </nav>
    );
    return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
    // Here it will be a different component
};

export default Greeting;