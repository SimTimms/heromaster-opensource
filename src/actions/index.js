import {
  ACTIVATE_CARD,
  ACTIVATE_MONSTER,
  PLAYER_ACTION,
  CANCEL_CARD,
  PLACE_CARD,
  INITIATE_COMBAT,
  RESOLVE_COMBAT
} from './types';

export const activateCard = (cardId, actionType, player) => {
  return {
    type: ACTIVATE_CARD,
    payload: { cardId, actionType, player }
  };
};

export const playerAction = (cardId, actionType, player, target) => {
  return {
    type: PLAYER_ACTION,
    payload: { cardId, actionType, player, target }
  };
};

export const intiateCombat = target => {
  return {
    type: INITIATE_COMBAT,
    payload: { target }
  };
};

export const resolveCombat = () => {
  return {
    type: RESOLVE_COMBAT
  };
};

export const activateMonster = (cardId, actionType) => {
  return {
    type: ACTIVATE_MONSTER,
    payload: { cardId, actionType }
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
