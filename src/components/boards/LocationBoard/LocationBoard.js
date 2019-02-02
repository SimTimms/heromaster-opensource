import React from 'react';
import './style.css';
import { ModalButton } from '../../modals';
import { ListCards } from '../../modals';
import { monsters } from '../../../data/monsters';
import FightButton from '../../combat/FightButton';

class LocationBoard extends React.Component {
  monsterCard = (
    monster,
    monsterNumber,
    currentAction,
    currentActionTarget
  ) => {
    if (currentAction === 'attack1') {
      return (
        <ModalButton
          title={`Target this ${monster}`}
          action="targetThis"
          monsterNumber={monsterNumber}
          currentAction={currentAction}
          currentActionTarget={currentActionTarget}
        >
          <FightButton action="targetThis" targetId={monster} />
        </ModalButton>
      );
    } else {
      return (
        <ModalButton title={monster ? monster : 'Choose a Monster'}>
          <ListCards
            cards={monsters}
            action="chooseMonster"
            monsterNumber={monsterNumber}
          />
        </ModalButton>
      );
    }
  };

  render() {
    return (
      <div>
        Location
        <div className="boardBorder">
          <div className="cardArea monsterArea">
            {this.monsterCard(
              this.props.monster1,
              1,
              this.props.currentAction,
              this.props.currentActionTarget
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationBoard;
