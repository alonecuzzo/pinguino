import React, { Component } from 'react';
import { SignUpForm } from './SignUpForm';
import { UserListPage } from './UserListPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignUpForm} />
          <Route path="/users" component={UserListPage} />
        </div>
      </Router>
    );
  }
}

export default App;
