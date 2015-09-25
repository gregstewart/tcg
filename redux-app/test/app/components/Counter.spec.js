import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdomReact from '../../jsdomReact';
import React from 'react/addons';
import Counter from '../../../app/components/Counter';

const { TestUtils } = React.addons;
const expect = chai.expect;
chai.use(sinonChai);

function setup() {
  const actions = {
    increment: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    incrementAsync: sinon.spy(),
    decrement: sinon.spy()
  }
  const component = TestUtils.renderIntoDocument(<Counter counter={1} {...actions} />);
  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button.getDOMNode();
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p').getDOMNode()
  };
}

describe('Counter component', () => {
  jsdomReact();

  it('displays count', () => {
    const { p } = setup();
    expect(p.textContent).to.match(/^Clicked: 1 times/);
  });

  it('calls increment when first button is clicked', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[0]);
    expect(actions.increment).to.have.been.called;
  });

  it('calls decrement when second button is clicked', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[1]);
    expect(actions.decrement).to.have.been.called;
  });

  it('calls incrementIfOdd when third button is clicked', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[2]);
    expect(actions.incrementIfOdd).to.have.been.called;
  });

  it('calls incrementAsync when fourth button is clicked', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[3]);
    expect(actions.incrementAsync).to.have.been.called;
  });

});
