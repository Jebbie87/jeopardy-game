import React, { Component } from 'react';
import './App.css';
import GameSquare from './containers/GameSquare'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jeopardy</h1>
          <GameSquare />
          <GameSquare />
          <GameSquare />
          <GameSquare />
          <GameSquare />
          <GameSquare />
        </div>
      </div>
    );
  }
}

export default App;
