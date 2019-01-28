import { ACTIVATE_CARD, CANCEL_CARD, PLACE_CARD } from '../actions/types';

const INITIAL_STATE = {
  activeCard: null,
  position1: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVATE_CARD:
    case CANCEL_CARD:
      return { ...state, activeCard: action.payload };

    case PLACE_CARD:
      return { ...state, position1: action.payload, activeCard: null };

    default:
      return state;
  }
};
