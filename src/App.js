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
              weapon1={this.props.player1Weapon1}
              weapon2={this.props.player1Weapon2}
              armour={this.props.player1Armour}
              attack={this.props.player1Attack}
            />
            <PlayerBoard
              playerNumber={2}
              race={this.props.player2Race}
              playerClass={this.props.player2Class}
              weapon1={this.props.player2Weapon1}
              weapon2={this.props.player2Weapon2}
              armour={this.props.player2Armour}
              attack={this.props.player1Attack}
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
    player2Class: state.player2Class,
    player1Weapon1: state.player1Weapon1,
    player2Weapon1: state.player2Weapon1,
    player1Weapon2: state.player1Weapon2,
    player2Weapon2: state.player2Weapon2,
    player1Armour: state.player1Armour,
    player2Armour: state.player2Armour,
    player1Attack: state.player1Attack,
    player2Attack: state.player2Attack
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
