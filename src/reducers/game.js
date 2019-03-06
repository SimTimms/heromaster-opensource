import { GAME_EVENT, WAIT_INPUT, ACTIVATE_MODAL } from '../actions/types';
import { INITIAL_STATE } from './index';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GAME_EVENT:
      return {
        ...state,
        gameEvent: action.payload.event,
      };

    case WAIT_INPUT:
      return {
        ...state,
        gameEvent: action.payload.actionType,
      };

    case ACTIVATE_MODAL:
      return {
        ...state,
        pickRaceModal: action.payload,
      };

    default:
      return state;
  }
};
