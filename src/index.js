import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { signup } from './reducer';
import { initializeMockBackend } from './mockBackend';

initializeMockBackend();

let store = createStore(
    signup,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={ store }>
      <App />
    </Provider>
    , document.getElementById('root'));

