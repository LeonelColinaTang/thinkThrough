import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MainSplashPage from "./splash/main_splash_page";
import NotFound from "./not_found/not_found";
import PostPageContainer from "./post/post_page_container";

import Modal from './modal/modal';


const App = () =>(
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <Route path="/posts/:id" component={PostPageContainer} />
            <Route component={NotFound} />
        </Switch>
    </div>
);


export default App;