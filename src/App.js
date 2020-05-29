import React, { Component } from 'react';
import StateComponent from './State';
import EffectComponent from './Effect';
import ContextComponent from './Context';
import MemoComponent from './Memo';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
        <hr />
        <ContextComponent />
        <hr />
        <MemoComponent />
      </div>
    );
  }
}

export default App;
