import { ACTIVATE_CARD, CANCEL_CARD, PLACE_CARD } from './types';

export const activateCard = cardId => {
  return {
    type: ACTIVATE_CARD,
    payload: cardId
  };
};

export const cancelCard = () => {
  return {
    type: CANCEL_CARD,
    payload: null
  };
};

export const placeCard = cardId => {
  return {
    type: PLACE_CARD,
    payload: cardId
  };
};
