import {expect} from 'chai';
import entities from '../../../app/reducers/entities';
import { CAST_COMMAND } from '../../../app/actions/commands';

let initialState;

describe('reducers', () => {
  before(() => {
    initialState = [
        { id: 1, name: 'bob', health: 100, type: 'PLAYER_CHARACTER' },
        { id: 2, name: 'harry', health: 100, type: 'NON_PLAYER_CHARACTER' }
    ]
  });
  describe('entities', () => {
    it('should handle initial state', () => {
      expect(entities(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle CAST', () => {
      let expected = [
          { id: 1, name: 'bob', health: 100, type: 'PLAYER_CHARACTER' },
          { id: 2, name: 'harry', health: 99, type: 'NON_PLAYER_CHARACTER' }
      ];
      let action = {
        type: CAST_COMMAND,
        actor: 1,
        target: 2
      }

      expect(entities(initialState, action)).to.deep.equal(expected);
    });
  });
});
