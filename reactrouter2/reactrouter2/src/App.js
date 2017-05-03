import React, { Component } from 'react';
import {Router, Link, browserHistory} from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <h3>reactrouter2</h3>
        <ul>
          <li><Link activeStyle={{color: 'blue'}} to="/home">Home</Link></li>
          <li><Link activeStyle={{color: 'blue'}} to="/about">About</Link></li>
          <li><Link activeStyle={{color: 'blue'}} to="/contact">Contact</Link></li>
          <li><Link activeStyle={{color: 'blue'}} to="/blog">Blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
