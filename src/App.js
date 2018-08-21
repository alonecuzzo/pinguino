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
          {
            /*
              Might be cool to set up an API structure that revoles around the user model.
              I forget the proper cannonical naming of this, but something like:
              /user/{userid}/map
              https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
            */
          }
        </div>
      </Router>
    );
  }
}

export default App;
