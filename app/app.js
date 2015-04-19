import reflex from 'reflex';
import home from './routes/home';
import playerRaces from './routes/player-races';

const Application = reflex.application.create({
  getInitialState() {
    return {
      playerRaces: [
        {
          "id": 1,
          "name": "Human"
        },
        {
          "id": 2,
          "name": "Orc"
        },
        {
          "id": 3,
          "name": "Dwarf"
        }
      ]
    };
  },
  routes() {
    let page = reflex.routes.page;
    return reflex.routes.define(
      page('/', home),
      page('/player-races', playerRaces)
    );
  },
  start(state) {
    let playerRaces = state.get('playerRaces');
  }
});

export default Application;