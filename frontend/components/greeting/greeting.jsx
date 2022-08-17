import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) =>{


    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Sign In</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Get Started</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="nav-header">
            <h1 className="header-title">thinkThrough</h1>
            <div className="greeting-div">
                <h2 className="header-text">Hi, {currentUser.email}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </div>
    );
    return (currentUser) ? personalGreeting() : sessionLinks();
};

export default Greeting;