import { CAST_COMMAND } from '../actions/commands';

let initialState = [
    { id: 1, name: 'bob', health: 100, type: 'PLAYER_CHARACTER' },
    { id: 2, name: 'harry', health: 100, type: 'NON_PLAYER_CHARACTER' }
];

export default function cast(state = initialState, action) {
  switch (action.type) {
  case CAST_COMMAND:
    return initialState.map(player =>
      player.id === action.target ?
        Object.assign({}, player, { health: player.health - 1}) : player
    )
  default:
    return state;
  }
}
