import React from 'react';
import '../global/style.css';
import { Button } from 'semantic-ui-react';

const playerName = name => {
  return <div>{name}</div>;
};

class HeroMasterCard extends React.Component {
  render() {
    return <div className="cardBorder">{playerName('Player name')}</div>;
  }
}

export default HeroMasterCard;
