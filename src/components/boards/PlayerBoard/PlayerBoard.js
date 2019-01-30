import './style.css';
import React from 'react';

import CardSpace from '../../global/CardSpace';
import { PlayerHand } from '../PlayerHand';
import { Deck } from '../Deck';
import HealthTrack from './HealthTrack';
import { SelectCard } from '../../modals';
import { races } from '../../../data/races';
import { classes } from '../../../data/classes';
import { weapons } from '../../../data/weapons';
import { armours } from '../../../data/armours';

class PlayerBoard extends React.Component {
  raceCard = race => {
    let title = 'Choose Your Race';
    if (race !== null) {
      title = race;
    }
    return (
      <SelectCard
        title={title}
        cards={races}
        action="chooseRace"
        playerNumber={this.props.playerNumber}
      />
    );
  };

  classCard = playerClass => {
    let title = 'Choose Your Class';
    if (playerClass !== null) {
      title = playerClass;
    }
    return (
      <SelectCard
        title={title}
        cards={classes}
        action="chooseClass"
        playerNumber={this.props.playerNumber}
      />
    );
  };

  weaponCard = (weapon, position) => {
    let title = 'Choose Your Weapon';
    if (weapon !== null) {
      title = weapon;
    }
    return (
      <SelectCard
        title={title}
        cards={weapons}
        action={`chooseWeapon${position}`}
        playerNumber={this.props.playerNumber}
      />
    );
  };

  armourCard = armour => {
    let title = 'Choose Your Armour';
    if (armour !== null) {
      title = armour;
    }
    return (
      <SelectCard
        title={title}
        cards={armours}
        action={`chooseArmour`}
        playerNumber={this.props.playerNumber}
      />
    );
  };

  render() {
    return (
      <div>
        Player {this.props.playerNumber}
        <div className="boardBorder">
          <div className="cardArea raceArea">
            {this.raceCard(this.props.race)}
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
            {this.classCard(this.props.playerClass)}
          </div>
          <div className="cardArea weaponOneArea">
            {this.weaponCard(this.props.weapon1, 1)}
          </div>
          <div className="cardArea weaponTwoArea">
            {this.weaponCard(this.props.weapon2, 2)}
          </div>
          <div className="cardArea armourArea">
            {this.armourCard(this.props.armour)}
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
