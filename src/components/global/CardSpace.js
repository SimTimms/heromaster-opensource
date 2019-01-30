import React from 'react';
import { connect } from 'react-redux';
import { placeCard } from '../../actions';
import './style.css';

class CardSpace extends React.Component {
  placeCardHere = cardId => {
    this.props.placeCard(cardId);
  };

  render() {
    return (
      <div className="cardSpaceBorder" onClick={this.props.onClick}>
        {this.props.cardType}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { position1: state.position1 };
};

export default connect(
  mapStateToProps,
  { placeCard }
)(CardSpace);
