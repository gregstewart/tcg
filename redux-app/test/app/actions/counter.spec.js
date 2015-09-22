import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as actions from '../../../app/actions/counter';

const expect = chai.expect;
chai.use(sinonChai);

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT_COUNTER });
  });

  it('incrementIfOdd should create action if counter is odd', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).to.be.a('function');
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 1 });

    fn(dispatch, getState);

    expect(dispatch).to.have.been.calledWith({ type: actions.INCREMENT_COUNTER });
  });

  it('incrementIfOdd should not create action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 2 });

    fn(dispatch, getState);

    expect(dispatch).not.to.have.been.calledWith({ type: actions.INCREMENT_COUNTER });
  });

  it('incrementAsync', () => {
    const clock = sinon.useFakeTimers();
    const fn = actions.incrementAsync(1);
    expect(fn).to.be.a('function');
    const dispatch = sinon.spy();

    fn(dispatch);
    clock.tick(5);

    expect(dispatch).to.have.been.calledWith({ type: actions.INCREMENT_COUNTER });

    clock.restore();
  });
});
