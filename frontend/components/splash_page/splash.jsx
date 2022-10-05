import React from "react";
import { useState } from "react";
import LoggedInNav from "./logged_in_nav";
import ArticlesMainSection from "./articles_main_section";
import AsideMainSection from "./aside_main_section";

const Splash = () =>{

    const [filtered, setFiltered] = useState(false);


    return(
        <div className="nav-logged-in-container">
            <LoggedInNav 
                filtered={filtered}
                setFiltered={setFiltered}
            />
            <ArticlesMainSection 
                filtered={filtered}
                setFiltered={setFiltered}
            />
            <AsideMainSection />
        </div>
    )
}

export default Splash;