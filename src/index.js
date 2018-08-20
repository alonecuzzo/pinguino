import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import reducer from './reducers/index';

let store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={ store }>
      <App />
    </Provider>
    , document.getElementById('root'));

