import React, {Component} from 'react';
import {Router, Link, browserHistory} from 'react-router';
import './App.css';

export default class Home extends React.Component{
  render(){
    return(
        <div>
          <div className="homeimage">
            <h3 className="homeheader">HOME</h3>
          </div>
        </div>
      );
  }
}