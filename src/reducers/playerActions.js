import { PLAYER_ACTION, RESOLVE_COMBAT } from '../actions/types';
import { monsters } from '../data/monsters';

const INITIAL_STATE = {
  currentActionPlayer: null,
  currentActionTarget: null,
  currentAction: null,
  currentActionCard: null,
  player1Attack1: null,
  player2Attack1: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PLAYER_ACTION:
      switch (action.payload.actionType) {
        case 'attack1':
          return {
            ...state,
            currentActionPlayer: action.payload.player,
            currentActionTarget: action.payload.target,
            currentAction: action.payload.actionType,
            currentActionCard: action.payload.cardId,
            [`player${action.payload.player}Attack1`]: action.payload.cardId
          };

        default:
          return state;
      }

    case RESOLVE_COMBAT:
      return {
        ...state,
        currentActionTarget: action.payload.target
      };

    default:
      return state;
  }
};
