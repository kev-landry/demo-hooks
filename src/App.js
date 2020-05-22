import React, { Component } from 'react';
import StateComponent from './State';
import EffectComponent from './Effect';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
      </div>
    );
  }
}

export default App;
