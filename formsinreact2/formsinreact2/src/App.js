import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <h3>formsinreact2: how to use inputs in forms</h3>
        <Header/>
      </div>
    );
  }
}

class Header extends React.Component{

  constructor(){
    super()
    this.state = {
      myInputValue: "My input is Awesome"
    }
    this.myInputChanged = this.myInputChanged.bind(this);
  }

  myInputChanged(e){
    var itemValue = e.target.value;
    this.setState({
      myInputValue: itemValue
    })
  }

  render(){
    return(
        <div>
          <input value={this.state.myInputValue} onChange={this.myInputChanged}/>
          <h4>{this.state.myInputValue}</h4>
          <MyInputComponent inputValue={this.state.myInputValue} myInputChanged={this.myInputChanged}/>
          <EssayComponent/>
          <MyOwnFormComponent/>
          <MyOwnSelectComponent/>
        </div>
      );
  }
}

class MyInputComponent extends React.Component{
  render(){
    return(
      <div>
        <input value={this.props.myInputValue} onChange={this.props.myInputChanged}/>
      </div>
    );
  }
}

class EssayComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: "Once upon a time..."
    }
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
 
  render(){
    return(
      <div>
        <textarea value={this.state.value} onChange={this.handleChange}/>
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}

class MyOwnFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: "My Own Form Component"
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e){
    alert(this.state.value);
    e.preventDefault();
  }
 
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange}/>
        <h3>{this.state.value}</h3>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class MyOwnSelectComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: "strawberry"
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e){
    alert("you chose the flavor of:" + this.state.value);
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }
 
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>My Own Select Component</h3>
            Pick a flavor:
            <select onChange={this.handleChange}>
              <option value="strawberry">strawberry</option>
              <option value="banana">banana</option>
              <option value="blueberry">blueberry</option>
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}




export default App;










