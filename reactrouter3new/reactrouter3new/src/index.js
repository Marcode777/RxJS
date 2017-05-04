import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './home';
import About from './about';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>
      <App/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
