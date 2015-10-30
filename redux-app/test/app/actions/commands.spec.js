import chai from 'chai';
import * as commands from '../../../app/actions/commands'
const expect = chai.expect;

describe('commands', () => {
  it('increment should create a cast action', () => {
    expect(commands.cast()).to.deep.equal({ type: commands.CAST_COMMAND });
  });
});
