import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { newGame } from '../../events';
import { activateModal } from '../../actions';

class Game extends React.Component {
  render() {
    return (
      <div className="gameArea">
        <button
          onClick={() => {
            newGame(this.props.activateModal);
          }}
        >
          New Game
        </button>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let game = state.game;
  return {
    player1Race: game.gameEvent,
  };
};

export default connect(
  mapStateToProps,
  { activateModal },
)(Game);
