import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>ComponentsAPI</h3>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h3>Header Component</h3>
      </div>
      );
  }
}

class Content extends React.Component{

  constructor(){
    super()
    this.state = {
      data: [],
      count: 0
    };
    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);
  }

  updateMyState(){
    var count = this.state.count;
    count++;
    var item = "Click -"+count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({
      data: myArray,
      count: count
    });
  }

  forceUpdateRandomNumber(){
    this.forceUpdate();
  }

  findMyDOMNode(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }

  render(){
    return(
        <div>
          <h3>Content Component</h3>
          <button onClick={this.updateMyState}>Click This</button>
          <h4> State Data: {this.state.data}</h4>
          <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
          <h4>Random Number: {Math.random()}</h4>
          <button onClick={this.findMyDOMNode}>Find My DOM Node</button>
          <div id="myDiv">This is my DIV</div>

        </div>
      );
  }
}

export default App;
