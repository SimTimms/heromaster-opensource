import React from 'react';
import '../../global/style.css';
import './style.css';
import { hand } from '../../../data/hand';

import { ModalButton } from '../../modals';
import { ListCards } from '../../modals';

class PlayerHand extends React.Component {
  handCard = () => {
    let title = 'Look at Hand';

    return (
      <ModalButton title={title}>
        <ListCards
          cards={hand}
          action={`chooseHand`}
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  };

  render() {
    return (
      <div>
        Hand
        <div className="nonPhysicalBoard">
          <div className="cardArea handArea">
            {this.handCard(this.props.hand)}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerHand;
