import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPageContainer from "./splash/splash_page_container";
import TrendingPostContainer from "./splash/trending_posts_container";

import Modal from './modal/modal';



const App = () =>(
    <div>
        <Modal />
        <header>
            <GreetingContainer /> 
        </header>
            <SplashPageContainer />
            <TrendingPostContainer />
    </div>
);


export default App;



// const Main = () => {
//     const mainRender = () => (
//         <div>
//             <NavBar />
//             <ArticleIndex />
//             <Footer />
//         </div>
//     );

//     const rootRender = () => (
//         <div>
//             <NavBar />
//             <Splash />
//             <Footer />
//         </div>
//     );

//     return (currentUser ? mainRender() : rootRender());
// }

// const NavBar = () => {
//     if (currentUser) {
//         return this;
//     } else {
//         return that;
//     }
// }