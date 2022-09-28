import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";


const YellowBox = () => { 

    const dispatch = useDispatch();

    return(
        <div className="splash-yellow-container">
            <div id="stay-curious-div">
                <div id="stay-curious-flex-div">
                    <h1>Stay curious.</h1>
                    <p>Discover stories, thinking, and</p>
                    <p>expertise from writers on any topic.</p>
                    <button onClick={() => dispatch(openModal('signup'))} id="start-reading-button">Start reading</button>
                </div>
            </div>
            <div id="moving-letters">

            </div>
        </div>
    )
};   

export default YellowBox;