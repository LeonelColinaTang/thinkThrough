import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createUser, loginUser, logoutUser } from './actions/session_actions'

document.addEventListener("DOMContentLoaded",()=>{
    const root = document.getElementById('root');

    let store;
    if (window.currentUser){
        const preloadedState= {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store= configureStore();
    }
    // const store= configureStore();
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }



    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    window.createUser = createUser;
    window.logoutUser = logoutUser;

    ReactDOM.render(<Root store={store} />, root);
});