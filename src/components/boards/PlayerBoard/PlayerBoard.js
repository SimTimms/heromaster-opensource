import React from 'react';
import { PlayerHand } from '../PlayerHand';
import { Deck } from '../Deck';
import HealthTrack from './HealthTrack';
import { races } from '../../../data/races';
import { classes } from '../../../data/classes';
import { weapons } from '../../../data/weapons';
import { armours } from '../../../data/armours';
import { hand } from '../../../data/hand';
import { ModalButton } from '../../modals';
import { ListCards } from '../../modals';

class PlayerBoard extends React.Component {
  raceCard = race => {
    let title = 'Choose Your Race';
    if (race !== null) {
      title = race;
    }
    return (
      <ModalButton title={title}>
        <ListCards
          cards={races}
          action="chooseRace"
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  };

  classCard = playerClass => {
    let title = 'Choose Your Class';
    if (playerClass !== null) {
      title = playerClass;
    }
    return (
      <ModalButton title={title}>
        <ListCards
          cards={classes}
          action="chooseClass"
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  };

  weaponCard = (weapon, position) => {
    let title = 'Choose Your Weapon';
    if (weapon !== null) {
      title = weapon;
    }
    return (
      <ModalButton title={title}>
        <ListCards
          cards={weapons}
          action={`chooseWeapon${position}`}
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  };

  armourCard = armour => {
    let title = 'Choose Your Armour';
    if (armour !== null) {
      title = armour;
    }
    return (
      <ModalButton title={title}>
        <ListCards
          cards={armours}
          action={`chooseArmour`}
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  };

  attackCard = (attack, attackNumber) => {
    let title = 'Choose Your Attack';
    if (attack !== null) {
      title = attack;
    }
    return (
      <ModalButton title={title}>
        <ListCards
          cards={hand}
          action={`chooseAttack${attackNumber}`}
          playerNumber={this.props.playerNumber}
          attackNumber={attackNumber}
        />
      </ModalButton>
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
            {this.attackCard(this.props.attack1, 1)}
          </div>
          <div className="cardArea attackTwoArea">
            {this.attackCard(this.props.attack2, 2)}
          </div>
          <div className="cardArea attackThreeArea">
            {this.attackCard(this.props.attack3, 3)}
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
