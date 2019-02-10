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
              attack1={this.props.player1Attack1}
              attack2={this.props.player1Attack2}
              attack3={this.props.player1Attack3}
              playerHealth={this.props.player1Health}
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
              playerHealth={this.props.player2Health}
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
  let monster = state.monster;
  let playerActions = state.playerActions;
  return {
    player1Race: playerActions.player1Race,
    player2Race: playerActions.player2Race,
    player1Class: playerActions.player1Class,
    player2Class: playerActions.player2Class,
    player1Health: playerActions.player1Health,
    player2Health: playerActions.player2Health,
    player1Weapon1: playerActions.player1Weapon1,
    player2Weapon1: playerActions.player2Weapon1,
    player1Weapon2: playerActions.player1Weapon2,
    player2Weapon2: playerActions.player2Weapon2,
    player1Armour: playerActions.player1Armour,
    player2Armour: playerActions.player2Armour,
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
