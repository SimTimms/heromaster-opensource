import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Confirm from './Confirm';

export class CreateCards extends React.Component {
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
          <Modal.Header>{this.props.title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div className="cardGrid">
                {this.props.cards.map(card => {
                  //highlight cards that are playable
                  let usableClassName = '';
                  if (
                    (this.props.action === 'chooseAttack1' ||
                      this.props.action === 'chooseAttack2' ||
                      this.props.action === 'chooseAttack3') &&
                    card.type !== 'attack' &&
                    card.type !== 'event'
                  ) {
                    usableClassName = 'inactive';
                  }

                  return (
                    <Confirm
                      key={`${this.props.playerNumber}-${card.name}`}
                      title={card.name}
                      action={this.props.action}
                      cardId={card.id}
                      playerNumber={this.props.playerNumber}
                      close={this.close}
                      cardType={card.type}
                      usableClassName={usableClassName}
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
