import { ACTIVATE_CARD, CANCEL_CARD, PLACE_CARD } from '../actions/types';

const INITIAL_STATE = {
  player1Race: null,
  player2Race: null,
  player1Class: null,
  player2Class: null,
  position1: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVATE_CARD:
    case CANCEL_CARD:
      switch (action.payload.actionType) {
        case 'race':
          return {
            ...state,
            [`player${action.payload.player}Race`]: action.payload.cardId
          };
        case 'playerClass':
          return {
            ...state,
            [`player${action.payload.player}Class`]: action.payload.cardId
          };
        default:
          return state;
      }

    case PLACE_CARD:
      return { ...state, position1: action.payload };

    default:
      return state;
  }
};
