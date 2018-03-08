import React, { Component } from 'react';
import { SignUpForm } from './SignUpForm';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={SignUpForm} />
      </Router>
    );
  }
}

export default App;
