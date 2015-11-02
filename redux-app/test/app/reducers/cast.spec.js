import {expect} from 'chai';
import cast from '../../../app/reducers/cast';
import { CAST_COMMAND } from '../../../app/actions/commands';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(cast(undefined, {})).to.equal(100);
    });
  });
});
