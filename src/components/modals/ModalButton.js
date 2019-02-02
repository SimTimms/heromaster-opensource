import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

export class ModalButton extends React.Component {
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
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { close: this.close })
    );

    return (
      <div>
        <Button onClick={this.handleClick}>{this.props.title}</Button>
        <Modal open={open} onClose={this.close}>
          <Modal.Header>{this.props.title}</Modal.Header>
          {childrenWithProps}
        </Modal>
      </div>
    );
  }
}
