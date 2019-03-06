import React from 'react';
import { races } from '../data/races';
import { connect } from 'react-redux';
import { ModalButton, ListCards } from '../components/modals';
import { activateModal } from '../actions';

class RaceCard extends React.Component {
  state = { open: this.props.pickRaceModal };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleFocus = () => {
    this.setState({
      open: true,
    });
  };

  close = () => this.setState({ open: false });

  render() {
    console.log(this.props);
    let title = 'Choose Your Race';
    if (this.props.race !== null) {
      title = this.props.race;
    }
    return (
      <ModalButton
        title={title}
        handleClick={this.props.activateModal}
        close={this.props.activateModal}
        open={this.props.pickRaceModal}
      >
        <ListCards
          cards={races}
          action="chooseRace"
          playerNumber={this.props.playerNumber}
        />
      </ModalButton>
    );
  }
}

const mapStateToProps = state => {
  let gameActions = state.game;
  return {
    pickRaceModal: gameActions.pickRaceModal,
  };
};

export default connect(
  mapStateToProps,
  { activateModal },
)(RaceCard);
