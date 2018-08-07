import React, { Component } from 'react';
import { UserCreationForm } from './UserCreationForm';
import { UserList } from './UserList';
//import { UserMap } from './UserMap';
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
          <footer className="pinguino--footer">
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Penguin">Penguin</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
