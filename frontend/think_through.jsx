import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from "./util/session";

document.addEventListener("DOMContentLoaded",()=>{
    const root = document.getElementById('root');
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    ReactDOM.render(<h1>Welcome to thinkThrough</h1>, root);
});