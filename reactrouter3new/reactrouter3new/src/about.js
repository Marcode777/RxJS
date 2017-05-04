import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

export default class About extends React.Component{
  render(){
    return(
        <div>
          <div className="aboutimage">
            <h3 className="aboutheader">ABOUT</h3>
          </div>
        </div>
      );
  }
}