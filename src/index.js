import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { signup } from './reducer';
import { initializeMockBackend } from './mockBackend';

initializeMockBackend();

let store = createStore(signup);

render(
    <Provider store={ store }>
      <App />
    </Provider>
    , document.getElementById('root'));

