import React, { Component } from 'react';
import './App.css';
import { HeroMasterCard } from './components/cards';
import { LocationBoard, RewardBoard } from './components/boards';
import PlayerBoard from './components/boards/PlayerBoard/PlayerBoard';
import { Dice } from './components/global/dice';

class App extends Component {
  state = { activeCard: null };
  render() {
    return (
      <div className="App">
        <div className="table">
          <HeroMasterCard />
          <PlayerBoard />
          <LocationBoard />
          <RewardBoard />
          <Dice />
        </div>
      </div>
    );
  }
}

export default App;
