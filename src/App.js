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
        <div className="pinguino--app">
          <header className="pinguino--header">
            <div className="pinguino--logo"></div>
            <div className="pinguino--name">PINGUINO</div>
          </header>
          <Route exact path="/" component={UserCreationForm} />
          <Route path="/users" component={UserList} />
          <Route path="/usermap" component={UserMap} />
        </div>
      </Router>
    );
  }
}

export default App;
