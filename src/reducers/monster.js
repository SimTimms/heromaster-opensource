import { ACTIVATE_MONSTER, CANCEL_CARD } from '../actions/types';

const INITIAL_STATE = {
  monster1: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVATE_MONSTER:
    case CANCEL_CARD:
      switch (action.payload.actionType) {
        case 'monster1':
          return {
            ...state,
            monster1: action.payload.cardId
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
