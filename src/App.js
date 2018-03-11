import React, { Component } from 'react';
import { UserCreationForm } from './UserCreationForm';
import { UserList } from './UserList';
import { UserMap } from './UserMap';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="donate--container">
          <Route exact path="/" component={UserCreationForm} />
          <Route path="/users" component={UserList} />
          <Route path="/usermap" component={UserMap} />
        </div>
      </Router>
    );
  }
}

export default App;
