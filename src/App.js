import React, { Component } from 'react';
import { createStore } from 'react-redux';
import SignupForm from './SignupForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <SignupForm />
    );
  }
}

export default App;
