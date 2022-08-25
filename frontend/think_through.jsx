import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createOnePost, updateOnePost, deleteOnePost} from './actions/post_actions'

document.addEventListener("DOMContentLoaded",()=>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;   
    } else {
        store = configureStore();
    }

    window.getState = store.getState
    window.createOnePost = createOnePost
    window.updateOnePost = updateOnePost
    window.deleteOnePost = deleteOnePost


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});