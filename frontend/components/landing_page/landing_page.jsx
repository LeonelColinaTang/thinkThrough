import React from "react";
import YellowBox from "./yellow_box";
import LandingNavbar from "./landing_navbar";
import InfinitePostsContainer from "./infinite_posts_container";

import TrendingPosts from "./trending_posts";

const LandingPage = () =>{
   
    return(
        <>
            <LandingNavbar />
            <YellowBox />
            <TrendingPosts />
            <InfinitePostsContainer />
        </>
    )
}

export default LandingPage;