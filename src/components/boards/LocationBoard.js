import React from 'react';
import './style.css';
import CardSpace from '../global/CardSpace';

class LocationBoard extends React.Component {
  render() {
    return (
      <div className="boardBorder">
        Location
        <CardSpace cardType="location" />
        <CardSpace cardType="monster" />
      </div>
    );
  }
}

export default LocationBoard;
