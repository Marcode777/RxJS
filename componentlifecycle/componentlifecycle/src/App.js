import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <h3>COMPONENT LIFE CYCLE</h3>
        <Header/>
        <Content/>
      </div>
    );
  }
}


class Header extends Component{
  render(){
    return(
        <div>
          <h3>Header</h3>
        </div>
      );
  }
}



class Content extends Component{

  constructor(){
    super()
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({
      data: this.state.data + 1
    })
  }

  render(){
    return(
        <div>
          <h3>Content</h3>
          <button onClick={this.setNewNumber}>Update Number</button>
          <NumberComponent myNumber={this.state.data}/>
        </div>
      );
  }
}


class NumberComponent extends Component{

  componentWillMount(){
    console.log("Called the componentWillMount");
  }

   componentDidMount(){
    console.log("Called the componentDidMount");
  }

  componentWillReceiveProps(newProps){
    console.log("Called the componentWillReceiveProps");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("Called the shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("Called the componentWillUpdate");
  }

  componentDidUpdate(newProps, nextState){
    console.log("Called the componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("Called componentWillUnmount");
  }

  render(){
    return(
      <div>
        <h4>{this.props.myNumber}</h4>
      </div>
      );
  }
}


export default App;
