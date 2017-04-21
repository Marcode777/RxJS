import React, { Component } from 'react';

import Component1 from './Components/component1';
import Component2 from './Components/component2';
import Clock from './Components/clock';

class App extends Component {
  render() {
    return (
      <div>
        <h3>experimental</h3>
        <Component1/>
        <Component2/>
        <Clock/>
      </div>
    );
  }
}

export default App;
