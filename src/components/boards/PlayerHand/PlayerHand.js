import React from 'react';
import '../../global/style.css';
import './style.css';
import CardSpace from '../../global/CardSpace';

class PlayerHand extends React.Component {
  render() {
    return (
      <div>
        Hand
        <div className="nonPhysicalBoard">
          <div className="cardArea eventArea">
            <CardSpace cardType="event" />
          </div>
          <div className="cardArea bungleArea">
            <CardSpace cardType="bungle" />
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerHand;
