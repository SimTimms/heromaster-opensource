import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { LocationBoard, RewardBoard } from './components/boards';
import PlayerBoard from './components/boards/PlayerBoard/PlayerBoard';
import { Dice } from './components/global/dice';
import Game from './components/game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="table">
          <Game>
            <PlayerBoard
              playerNumber={1}
              race={this.props.player1Race}
              playerClass={this.props.player1Class}
            />
            <PlayerBoard
              playerNumber={2}
              race={this.props.player2Race}
              playerClass={this.props.player2Class}
            />
          </Game>
          <LocationBoard />
          <RewardBoard />
          <Dice />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    player1Race: state.player1Race,
    player2Race: state.player2Race,
    player1Class: state.player1Class,
    player2Class: state.player2Class
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
