import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

import {signUp} from './actions/session_actions'
//let store;
//if (window.currentUser) {
//  const preloadedState = {
//    session: { id: window.currentUser.id },
//    entities: {
//      users: { [window.currentUser.id]: window.currentUser }
//    }
//  };
//  store = configureStore(preloadedState);
//  delete window.currentUser;
//} else {
//  store = configureStore();
//}



document.addEventListener('DOMContentLoaded', () => {
  const store =configureStore()
  window.store=store
  window.signUp  = signUp
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})