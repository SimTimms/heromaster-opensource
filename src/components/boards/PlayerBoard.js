import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Button } from 'semantic-ui-react';
import { placeCard } from '../../actions';

class PlayerBoard extends React.Component {
  placeCardHere = cardId => {
    this.props.placeCard(cardId);
  };

  render() {
    console.log(this.props);
    return (
      <div className="boardBorder">
        <Button onClick={() => this.placeCardHere(this.props.activeCard)}>
          Select {this.props.activeCard} {this.props.position1}
        </Button>
      </div>
    );
  }
}

const maptStateToProps = state => {
  return { activeCard: state.activeCard, position1: state.position1 };
};

export default connect(
  maptStateToProps,
  { placeCard }
)(PlayerBoard);
