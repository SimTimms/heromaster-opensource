import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

export class ModalButton extends React.Component {
  render() {
    const { children, open } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { close: this.close }),
    );

    return (
      <div>
        <Button
          onClick={() => {
            this.props.handleClick(true);
          }}
        >
          {this.props.title}
        </Button>
        <Modal
          open={open}
          onClose={() => {
            this.props.handleClick(false);
          }}
        >
          <Modal.Header>{this.props.title}</Modal.Header>
          {childrenWithProps}
        </Modal>
      </div>
    );
  }
}
