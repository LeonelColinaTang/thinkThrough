import React from "react";

import LoggedInNav from "./logged_in_nav";
import ArticlesMainSection from "../greeting/articles_main_section";
import AsideMainSection from "./aside_main_section";

const Splash = () =>{

    return(
        <div className="nav-logged-in-container">
            <LoggedInNav />
            <ArticlesMainSection />
            <AsideMainSection />
        </div>
    )
}

export default Splash;