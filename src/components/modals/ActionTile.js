import React from 'react';
import { Modal } from 'semantic-ui-react';

export class ActionTile extends React.Component {
  render() {
    return (
      <div>
        <Modal.Content>
          <Modal.Description>
            <div className="cardGrid" />
          </Modal.Description>
        </Modal.Content>
      </div>
    );
  }
}
