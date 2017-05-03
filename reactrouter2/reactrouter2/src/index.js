import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from './home';
import About from './about';
import Contact from './contact';
import Blog from './blog';
import BlogSingle from './blogsingle';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/blog" component={Blog}>
        <Route path="/blog/:postId" component={BlogSingle}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
