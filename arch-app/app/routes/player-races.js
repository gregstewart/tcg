import BaseRoute from './base-route';
import ListComponent from '../components/list-component';

class PlayerRaces extends BaseRoute {
  getTitle() {
    return super.getTitle("Player Races!");
  }

  render() {
    let entities = this.props.appState.get('state.playerRaces');
    return (
      <div className="container">
        <h1>Player Races</h1>
        <ListComponent entities={entities} />
      </div>
    )
  }
}

export default PlayerRaces;
