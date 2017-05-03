import React, {Component} from 'react';
import {Router, Link, browserHistory} from 'react-router';
import './App.css';

export default class Blog extends React.Component{
  render(){
    return(
        <div className="blogimage">
          <h3 className="blogheader">BLOG</h3>
           <ul>
            <li><Link activeStyle={{color: 'blue'}} to="/blog/123">Blog1</Link></li>
            <li><Link activeStyle={{color: 'blue'}} to="/blog/456">Blog2</Link></li>
            <li><Link activeStyle={{color: 'blue'}} to="/blog/789">Blog3</Link></li>
          </ul>
          {this.props.children}
        </div>
      );
  }
}