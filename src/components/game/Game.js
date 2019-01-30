import React from 'react';
import './style.css';

class Game extends React.Component {
  render() {
    return <div className="gameArea">{this.props.children}</div>;
  }
}

export default Game;
