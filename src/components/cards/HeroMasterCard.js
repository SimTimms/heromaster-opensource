import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Button } from 'semantic-ui-react';
import { activateCard } from '../../actions';

const playerName = name => {
  return <div>{name}</div>;
};

class HeroMasterCard extends React.Component {
  activateCardClick = cardId => {
    this.props.activateCard(cardId);
  };

  cancelCardClick = () => {
    this.props.activateCard();
  };

  render() {
    return (
      <div className="cardBorder">
        {playerName('Player Name')}
        <Button onClick={() => this.activateCardClick(2)}>Select</Button>
        <Button onClick={this.cancelCardClick}>
          Cancel {this.props.activeCard}
        </Button>
      </div>
    );
  }
}

const maptStateToProps = state => {
  return { activeCard: state.activeCard };
};

export default connect(
  maptStateToProps,
  { activateCard }
)(HeroMasterCard);
