import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

import {signUp} from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    console.log(window.currentUser,'look')
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        user: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



  window.store=store
  window.signUp  = signUp

  ReactDOM.render(<Root store={store} />, root);
})