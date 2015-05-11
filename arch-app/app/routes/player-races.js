import BaseRoute from './base-route';
import arch from 'arch';
import ListComponent from '../components/list-component';
import Layout from '../components/layout';

let layout = arch.dom(Layout);
let listComponent = arch.dom(ListComponent);
let d = arch.DOM;

class PlayerRaces extends BaseRoute {
  getTitle() {
    return super.getTitle("Player Races!");
  }

  render() {
    return layout(
      d.h1('Player Races'),
      listComponent()
    );
  }
}

export default PlayerRaces;
