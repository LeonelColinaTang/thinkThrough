import React from "react";
import { useState } from "react";
import LoggedInNav from "./logged_in_nav";
import ArticlesMainSection from "./articles_main_section";
import AsideMainSection from "./aside_main_section";

const Splash = () =>{

    const [filtered, setFiltered] = useState(false);
    const [futureFeature, setFutureFeature] = useState(false);

    return(
        <div className="nav-logged-in-container">
            {futureFeature &&
                <div className="unfinished-feature">
                    <div onClick={()=>setFutureFeature(false)} className={"feature-x"}>X</div>
                    <p>New feature coming soon!</p>
                </div>
            }
            <LoggedInNav 
                filtered={filtered}
                setFiltered={setFiltered}
                futureFeature={futureFeature}
                setFutureFeature={setFutureFeature}
            />
            <ArticlesMainSection 
                filtered={filtered}
                setFiltered={setFiltered}
                futureFeature={futureFeature}
                setFutureFeature={setFutureFeature}
            />
            <AsideMainSection />
        </div>
    )
}

export default Splash;