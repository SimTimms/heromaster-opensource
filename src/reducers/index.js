import { combineReducers } from 'redux';
import monster from './monster';
import playerActions from './playerActions';
import game from './game';

export const INITIAL_STATE = {
  player1Race: null,
  player2Race: null,
  player1Class: null,
  player2Class: null,
  player1Weapon1: null,
  player2Weapon1: null,
  player1Weapon2: null,
  player2Weapon2: null,
  player1Armour: null,
  player2Armour: null,
  player1Attack1: null,
  player2Attack1: null,
  player1Attack2: null,
  player2Attack2: null,
  player1Attack3: null,
  player2Attack3: null,
  player1Health: 9,
  player2Health: 9,
  currentActionPlayer: null,
  currentActionTarget: null,
  currentAction: null,
  currentActionCard: null,
  pickRaceModal: null,
};

export default combineReducers({
  monster,
  playerActions,
  game,
});
