import React from 'react';
import Card from './Card';
import './style.css';

class ListCards extends React.Component {
  render() {
    return (
      <div className="cardGrid">
        {this.props.cards.map(card => {
          return (
            <Card
              key={`${card.key}`}
              title={card.values.name}
              action={this.props.action}
              cardId={card.key}
              playerNumber={this.props.playerNumber}
              close={this.props.close}
              cardType={card.values.type}
            />
          );
        })}
      </div>
    );
  }
}

export default ListCards;
