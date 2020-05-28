import React, { Component } from 'react';
import StateComponent from './State';
import EffectComponent from './Effect';
import ContextComponent from './Context';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
        <hr />
        <ContextComponent />
      </div>
    );
  }
}

export default App;
