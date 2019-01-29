import React from 'react';
import './style.css';
import CardSpace from '../../global/CardSpace';
import { PlayerHand } from '../PlayerHand';

class PlayerBoard extends React.Component {
  render() {
    return (
      <div>
        Player
        <div className="boardBorder">
          <div className="raceArea">
            <CardSpace cardType="race" />
          </div>
          <div className="attackOneArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="attackTwoArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="attackThreeArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="classArea">
            <CardSpace cardType="class" />
          </div>
          <div className="weaponOneArea">
            <CardSpace cardType="weapon" />
          </div>
          <div className="weaponTwoArea">
            <CardSpace cardType="weapon" />
          </div>
          <div className="armourArea">
            <CardSpace cardType="armour" />
          </div>
        </div>
        <PlayerHand />
      </div>
    );
  }
}

export default PlayerBoard;
