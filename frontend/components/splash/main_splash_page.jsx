import React from "react";
import SplashPageContainer from "./splash_page_container";
import TrendingPostContainer from "./trending_posts_container";
import InfinitePostsContainer from "./infinite_posts_container";


const MainSplashPage = () =>(
    <>
        <SplashPageContainer />
        <TrendingPostContainer />
        <InfinitePostsContainer />
    </>
)

export default MainSplashPage;