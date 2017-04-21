import React, { Component } from 'react';
import Component1 from './Components/component1';
import Clock from './Components/clock';

class App extends Component {
  render() {
    return (
      <div>
        <h3>experimental2</h3>
        <Component1/>
        <Clock/>
      </div>
    );
  }
}

export default App;
