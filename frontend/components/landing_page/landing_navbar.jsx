import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const LandingNavbar = () =>{

    const dispatch =  useDispatch();

    return (
        <nav className="nav-header">
            <a href="#" className="think-through small-logo"><img src={window.smallMediumLogo} /><span>Thinkthrough</span></a>
            <div className="login-signup">
                <a href="https://www.linkedin.com/in/leonel-colina/" target="_blank"><img src={window.smallLinkedinLogo} className="small-logo"/></a>
                <a href="https://github.com/LeonelColinaTang" target="_blank"><img src={window.smallGithubLogo} className="small-logo" /></a>
                <a href="https://angel.co/u/leonel-colina" target="_blank"><img src={window.smallAngelistLogo} className="small-logo" /></a>
                <a href="https://leonelcolinatang.github.io/" target="_blank"><img src={window.website} className="small-logo" /></a>
                <a href="#" onClick={() => dispatch(openModal('login'))} id="login-navbar-link">Sign in</a>
                <button onClick={() => dispatch(openModal('signup'))} className="get-started-button">Get Started</button>
            </div>
        </nav>
    )
};

export default LandingNavbar;