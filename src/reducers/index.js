import { combineReducers } from 'redux';
import monster from './monster';
import player from './player';
import playerActions from './playerActions';

export default combineReducers({
  monster,
  player,
  playerActions
});
