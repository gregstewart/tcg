import React, {Component, PropTypes} from 'react';

class PlayerTile extends Component {
  displayName: PlayerTile
  render() {
    const { cast, name, health } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          <li className="stats">Health: {health}</li>
        </ul>
        <div className="commands">
          <button onClick={cast}>Do eet</button>
        </div>
      </div>
    )
  }
}

PlayerTile.propTypes = {
  cast: PropTypes.func.isRequired,
  health: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default PlayerTile;
