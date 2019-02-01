import { ACTIVATE_CARD, CANCEL_CARD } from '../actions/types';

const INITIAL_STATE = {
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
  player2Attack3: null
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
        case 'weapon1':
          return {
            ...state,
            [`player${action.payload.player}Weapon1`]: action.payload.cardId
          };
        case 'weapon2':
          return {
            ...state,
            [`player${action.payload.player}Weapon2`]: action.payload.cardId
          };
        case 'armour':
          return {
            ...state,
            [`player${action.payload.player}Armour`]: action.payload.cardId
          };
        case 'attack1':
          return {
            ...state,
            [`player${action.payload.player}Attack1`]: action.payload.cardId
          };
        case 'attack2':
          return {
            ...state,
            [`player${action.payload.player}Attack2`]: action.payload.cardId
          };
        case 'attack3':
          return {
            ...state,
            [`player${action.payload.player}Attack3`]: action.payload.cardId
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
