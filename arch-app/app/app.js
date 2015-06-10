import arch from 'arch';

import welcome from './routes/welcome';
import playerRaces from './routes/player-races';
import notFound from './routes/not-found';

let initialState = {
  playerRaces: [
    {
      'id': 1,
      'name': 'Human'
    },
    {
      'id': 2,
      'name': 'Orc'
    },
    {
      'id': 3,
      'name': 'Dwarf'
    },
    {
      'id': 4,
      'name': 'Elf'
    }
  ]
};

let app = arch.application.create({
  getInitialState() {
    return initialState;
  },

  start() {
    // takes `appState` as an argument
  },

  routes() {
    let page = arch.routes.page;

    return arch.routes.define(
      page('/', welcome),
      page('/player-races', playerRaces),
      page('*', notFound)
    );
  }
});

export default app;
