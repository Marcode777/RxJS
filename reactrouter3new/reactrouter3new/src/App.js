import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>reactrouter2</h3>
        <ul>
          <li><Link activeStyle={{color: 'blue'}} to="/home">Home</Link></li>
          <li><Link activeStyle={{color: 'blue'}} to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
