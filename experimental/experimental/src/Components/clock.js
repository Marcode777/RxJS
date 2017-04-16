import React from 'react';

export default class Clock extends React.Component{

  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }

 tick(){
    this.setState({
      date: new Date()
    })
 }

 componentDidMount(){
  this.timeID = setInterval(
    ()=> {this.tick()}, 1000)
 }

 componentWillUnmount(){
  clearInterval(this.timeID)
 }

  render(){
    return(
        <div>
          <h3>Clock</h3>
          <h3>Current Time Is: {this.state.date.toLocaleString()}</h3>
        </div>
      );
  }
}