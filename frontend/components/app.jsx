import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NotFound from "./not_found/not_found";
import PostPageContainer from "./post/post_page_container";
import LandingPage from "./landing_page/landing_page";
import Splash from "./splash_page/splash";
import Modal from './session_form/modal';


const App = () =>(
    <div>
        <Modal />
        <Switch>
            {/* <Route path="/posts/:id" component={PostPageContainer} />*/}
            <AuthRoute exact path="/" component={LandingPage} />
            <ProtectedRoute exact path="/profile" component={Splash} />
            <Route component={NotFound} />
        </Switch>
    </div>
);


export default App;