import React from 'react';
import '../../global/style.css';
import './style.css';
import { hand } from '../../../data/hand';
import { CreateCards } from '../../modals';

class PlayerHand extends React.Component {
  handCard = () => {
    let title = 'Look at Hand';

    return (
      <CreateCards
        title={title}
        cards={hand}
        action={`chooseHand`}
        playerNumber={this.props.playerNumber}
      />
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
