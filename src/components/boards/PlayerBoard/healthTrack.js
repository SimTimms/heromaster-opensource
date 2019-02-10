import React from 'react';
import './style.css';

class HealthTrack extends React.Component {
  generateHealth = () => {
    let counters = [];
    for (let i = 9; i >= 0; i += -1) {
      counters.push(
        <div className="healthCounter" key={`health_${i}`}>
          {i}
        </div>
      );
    }
    return counters;
  };

  render() {
    return (
      <div className="healthTrack">
        {this.props.playerHealth}
        {this.generateHealth()}
      </div>
    );
  }
}

export default HealthTrack;
