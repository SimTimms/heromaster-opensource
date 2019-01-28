import React, { Component } from 'react';
import './App.css';
import { HeroMasterCard } from './components/cards';
import { PlayerBoard } from './components/boards';

class App extends Component {
  state = { activeCard: null };
  render() {
    return (
      <div className="App">
        <HeroMasterCard />
        <PlayerBoard />
      </div>
    );
  }
}

export default App;
