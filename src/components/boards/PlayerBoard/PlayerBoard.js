import React from 'react';
import './style.css';
import CardSpace from '../../global/CardSpace';
import { PlayerHand } from '../PlayerHand';
import { Deck } from '../Deck';
import HealthTrack from './HealthTrack';

class PlayerBoard extends React.Component {
  render() {
    return (
      <div>
        Player Board
        <div className="boardBorder">
          <div className="cardArea raceArea">
            <CardSpace cardType="race" />
          </div>
          <div className="cardArea attackOneArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="cardArea attackTwoArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="cardArea attackThreeArea">
            <CardSpace cardType="attack" />
          </div>
          <div className="cardArea classArea">
            <CardSpace cardType="class" />
          </div>
          <div className="cardArea weaponOneArea">
            <CardSpace cardType="weapon" />
          </div>
          <div className="cardArea weaponTwoArea">
            <CardSpace cardType="weapon" />
          </div>
          <div className="cardArea armourArea">
            <CardSpace cardType="armour" />
          </div>
          <HealthTrack />
        </div>
        <PlayerHand />
        <Deck />
      </div>
    );
  }
}

export default PlayerBoard;
