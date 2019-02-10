import React from 'react';
import { connect } from 'react-redux';
import { intiateCombat } from '../../actions';
import { Button } from 'semantic-ui-react';

class FightButton extends React.Component {
  render() {
    return (
      <Button
        onClick={() => {
          this.props.intiateCombat(this.props.targetId);
        }}
      >
        Fight
      </Button>
    );
  }
}

const mapStateToProps = state => {
  let playerActions = state.playerActions;

  return {
    currentActionPlayer: playerActions.currentActionPlayer,
    currentActionTarget: playerActions.currentActionTarget,
    currentAction: playerActions.currentAction,
    currentActionCard: playerActions.currentActionCard
  };
};

export default connect(
  mapStateToProps,
  { intiateCombat }
)(FightButton);
