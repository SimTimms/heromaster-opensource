import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { LocationBoard, RewardBoard } from './components/boards';
import PlayerBoard from './components/boards/PlayerBoard/PlayerBoard';
import { Dice } from './components/global/dice';
import Game from './components/game/Game';

class App extends Component {
  render() {
    console.log(this.props);
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
              attack1={this.props.player1Attack1}
              attack2={this.props.player1Attack2}
              attack3={this.props.player1Attack3}
            />
            <LocationBoard
              monster1={this.props.monster1}
              currentActionPlayer={this.props.currentActionPlayer}
              currentActionTarget={this.props.currentActionTarget}
              currentAction={this.props.currentAction}
            />
            <PlayerBoard
              playerNumber={2}
              race={this.props.player2Race}
              playerClass={this.props.player2Class}
              weapon1={this.props.player2Weapon1}
              weapon2={this.props.player2Weapon2}
              armour={this.props.player2Armour}
              attack1={this.props.player2Attack1}
              attack2={this.props.player2Attack2}
              attack3={this.props.player2Attack3}
            />
          </Game>

          <RewardBoard />
          <Dice />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let player = state.player;
  let monster = state.monster;
  let playerActions = state.playerActions;

  console.log(playerActions, monster);
  return {
    player1Race: player.player1Race,
    player2Race: player.player2Race,
    player1Class: player.player1Class,
    player2Class: player.player2Class,
    player1Weapon1: player.player1Weapon1,
    player2Weapon1: player.player2Weapon1,
    player1Weapon2: player.player1Weapon2,
    player2Weapon2: player.player2Weapon2,
    player1Armour: player.player1Armour,
    player2Armour: player.player2Armour,
    player1Attack1: playerActions.player1Attack1,
    monster1: monster.monster1,
    currentActionPlayer: playerActions.currentActionPlayer,
    currentActionTarget: playerActions.currentActionTarget,
    currentAction: playerActions.currentAction,
    currentActionCard: playerActions.currentActionCard
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
