import React from 'react';
import { connect } from 'react-redux';
import { resolveCombat } from '../../actions';
import { Button } from 'semantic-ui-react';
import { monsters } from '../../data/monsters';

class FightButton extends React.Component {
  render() {
    return (
      <Button
        onClick={() => {
          this.props.resolveCombat(this.props.targetId);
        }}
      >
        Fight
      </Button>
    );
  }
}

const mapStateToProps = state => {
  let monster = state.monster;
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
  { resolveCombat }
)(FightButton);
