import React from 'react';
import { connect } from 'react-redux';
import { placeCard } from '../../actions';
import './style.css';

class CardSpace extends React.Component {
  placeCardHere = cardId => {
    this.props.placeCard(cardId);
  };
  render() {
    return <div className="cardBorder">{this.props.cardType}</div>;
  }
}

const maptStateToProps = state => {
  return { activeCard: state.activeCard, position1: state.position1 };
};

export default connect(
  maptStateToProps,
  { placeCard }
)(CardSpace);
