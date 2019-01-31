import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { activateCard } from '../../actions';
import './style.css';

const actionSelector = props => {
  switch (props.action) {
    case 'chooseRace':
      return props.activateCard(props.cardId, 'race', props.playerNumber);

    case 'chooseClass':
      return props.activateCard(
        props.cardId,
        'playerClass',
        props.playerNumber
      );

    case 'chooseWeapon1':
      return props.activateCard(props.cardId, 'weapon1', props.playerNumber);

    case 'chooseWeapon2':
      return props.activateCard(props.cardId, 'weapon2', props.playerNumber);

    case 'chooseArmour':
      return props.activateCard(props.cardId, 'armour', props.playerNumber);

    case 'chooseAttack':
      return props.activateCard(props.cardId, 'attack', props.playerNumber);

    default:
      return null;
  }
};
class Confirm extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({
      open: !this.state.isOpen
    });
  };

  handleFocus = () => {
    this.setState({
      open: true
    });
  };

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { usableClassName } = this.props;

    return (
      <div className="chooseCardWrapper">
        <h3> {this.props.title}</h3>
        <h4> {this.props.cardType}</h4>
        <div
          className={`tempButton ${usableClassName}`}
          onClick={this.handleClick}
        />
        <Modal open={open} onClose={this.close}>
          <Modal.Header>{`Are you sure you want to be a ${
            this.props.title
          }?`}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Button
                onClick={() => {
                  this.props.close();
                  return actionSelector(this.props);
                }}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  this.close();
                }}
              >
                {`No I don't want to be a ${this.props.title}`}
              </Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player1Race: state.player1Race, player2Race: state.player2Race };
};

export default connect(
  mapStateToProps,
  { activateCard }
)(Confirm);
