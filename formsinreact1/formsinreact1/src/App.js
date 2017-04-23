import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      headerText: " This is headerText.Welcome to React Forms!",
      contentText: "This is contentText"
    }
  }

  render() {
    return (
      <div>
        <h3>forms in react</h3>
        <Header/>
      </div>
    );
  }
}

class Header extends React.Component{
  
  constructor(){
    super()
    this.state ={
      myInputValue: "My Input is Awesome"
    };

    this.myInputChanged = this.myInputChanged.bind(this);
  
  }

  myInputChanged(e){
    var itemValue = e.target.value;
    this.setState({
      myInputValue: itemValue
    });
  }

  render(){
    return(
        <div>
          <h3>This is text from Header Component</h3>
          <input value={this.state.myInputValue} onChange={this.myInputChanged} />
          <h4>{this.state.myInputValue}</h4>
          <MyInputComponent inputValue={this.state.myInputValue} myInputChanged={this.myInputChanged}/>
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





export default App;
