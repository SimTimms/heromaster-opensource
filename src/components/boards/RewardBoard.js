import React from 'react';
import './style.css';
import CardSpace from '../global/CardSpace';

class RewardBoard extends React.Component {
  render() {
    return (
      <div className="boardBorder">
        Rewards
        <CardSpace cardType="treasure" />
        <CardSpace cardType="gold" />
      </div>
    );
  }
}

export default RewardBoard;
