import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./form/login_form_container";
import SignupFormContainer from "./form/signup_form_container";

const App = () =>(
    <div>
        <header>
            <GreetingContainer />    
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);


export default App;