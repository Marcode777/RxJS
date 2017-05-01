import React, { Component } from 'react';
import {Router, Link, browserHistory} from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <h3>reactrouter1</h3>
        <ul>
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
