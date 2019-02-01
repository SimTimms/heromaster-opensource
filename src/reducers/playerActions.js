import { PLAYER_ACTION } from '../actions/types';

const INITIAL_STATE = {
  playerAction: null,
  player: null,
  target: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_ACTION:
      switch (action.payload.actionType) {
        case 'attack1':
          return {
            ...state,
            [`currentActionPlayer`]: action.payload.player,
            [`currentActionTarget`]: action.payload.target,
            [`currentAction`]: action.payload.actionType
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
