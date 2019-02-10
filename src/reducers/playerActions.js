import {
  PLAYER_ACTION,
  INITIATE_COMBAT,
  ACTIVATE_CARD,
  CANCEL_CARD
} from '../actions/types';
import { monsters } from '../data/monsters';
import { hand } from '../data/hand';
import { armours } from '../data/armours';
import { INITIAL_STATE } from './index';

export default (state = INITIAL_STATE, action) => {
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
    case INITIATE_COMBAT:
      console.log('ad');
      const targetMonster = action.payload.target;

      const actionCardValues = hand.filter(
        card => card.key === state.player1Attack1
      );
      const monsterValues = monsters.filter(
        monster => monster.key === targetMonster
      );
      const armourValue = armours.filter(
        armour => armour.key === state.player1Armour
      );

      const monsterDefense = monsterValues[0].values.defense;
      const actionAttack = actionCardValues[0].values.attack;
      const playerArmour = armourValue[0].values.value;
      const monsterWounds = monsterValues[0].values.wounds;
      const playerDiceRoll = Math.floor(Math.random() * 20) + 1;
      const monsterDiceRoll = Math.floor(Math.random() * 20) + 1;
      const totalAttack = actionAttack + playerDiceRoll;

      if (monsterDefense <= totalAttack) {
        console.log(`destroy monster:${totalAttack}`);
      }
      if (playerArmour <= monsterDiceRoll) {
        console.log(`wound player:${playerArmour}-${monsterDiceRoll}`);
      }
      const playerHealth = state.player1Health - monsterWounds;
      return {
        ...state,
        currentActionTarget: action.payload.target,
        player1Health: playerHealth
      };

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
        default:
          return state;
      }
    default:
      return state;
  }
};
