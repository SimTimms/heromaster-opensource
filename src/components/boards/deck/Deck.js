import React from 'react';
import '../../global/style.css';
import './style.css';
import CardSpace from '../../global/CardSpace';
import { Discard } from './Discard';

class Deck extends React.Component {
  constructor(props) {
    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    alert('Draw Card');
  }
  render() {
    return (
      <div>
        Deck
        <div className="nonPhysicalBoard">
          <div className="cardArea deckArea">
            <CardSpace cardType="deck" onClick={this.drawCard} />
          </div>
          <div className="cardArea discardArea">
            <Discard cardType="deck" />
          </div>
        </div>
      </div>
    );
  }
}
export default Deck;
