import React from 'react';
import ListComponent from '../components/list-component';

const playerRaces = React.createClass({
  render() {
    let entities = this.props.appState.get('playerRaces');
    return (
      <div>
        <h1>Player Races</h1>
        <ListComponent entities={entities} />
      </div>
    );
  }
});

export default playerRaces;