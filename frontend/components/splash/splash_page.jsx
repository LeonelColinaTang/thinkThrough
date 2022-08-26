import React from "react";

const SplashPage = ({openModal }) => ( 

    <div className="splash-yellow-container">
        <div id="stay-curious-div">
            <div id="stay-curious-flex-div">
                <h1>Stay curious.</h1>
                <p>Discover stories, thinking, and</p>
                <p>expertise from writers on any topic.</p>
                <button onClick={() => openModal('signup')} id="start-reading-button">Start reading</button>
            </div>
        </div>
        <div id="moving-letters">
            
        </div>
    </div>
);   

export default SplashPage;