import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NotFound from "./not_found/not_found";
import PostPageContainer from "./post/post_page_container";
import LandingPage from "./landing_page/landing_page";
import Splash from "./splash_page/splash";
import Modal from './session_form/modal';
import WritingPostPage from "./post/create_post";
import EditPostPage from "./post/edit_post";


const App = () =>(
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={LandingPage} />
            <ProtectedRoute exact path="/profile" component={Splash} />
            <ProtectedRoute exact path="/newPost" component={WritingPostPage} />
            <ProtectedRoute exact path="/editPost/:id" component={EditPostPage} />
            <Route exact path="/posts/:postId" component={PostPageContainer} />
            <Route component={NotFound} />
        </Switch>
    </div>
);


export default App;