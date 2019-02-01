import React from 'react';
import './style.css';
import { ActionTile } from '../../modals';
import { monsters } from '../../../data/monsters';

class LocationBoard extends React.Component {
  monsterCard = (
    monster,
    monsterNumber,
    currentAction,
    currentActionTarget
  ) => {
    if (currentAction === 'attack1') {
      return (
        <ActionTile
          title={`Target this ${monster}`}
          cards={monsters}
          monsterNumber={monsterNumber}
          currentAction={currentAction}
          currentActionTarget={currentActionTarget}
        />
      );
    } else {
      return (
        <ActionTile
          title="Choose a Monster"
          cards={monsters}
          action="chooseMonster"
          monsterNumber={monsterNumber}
        />
      );
    }
  };

  onClickSwitch = () => {};

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
