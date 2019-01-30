import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Confirm from './Confirm';

export class SelectCard extends React.Component {
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

    return (
      <div>
        <Button onClick={this.handleClick}>{this.props.title}</Button>
        <Modal open={open} onClose={this.close}>
          <Modal.Header>Choose your Race</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div className="cardGrid">
                {this.props.cards.map(card => {
                  return (
                    <Confirm
                      key={`${this.props.playerNumber}-${card.Name}`}
                      title={card.Name}
                      action={this.props.action}
                      cardId={card.Id}
                      playerNumber={this.props.playerNumber}
                      close={this.close}
                    />
                  );
                })}
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
