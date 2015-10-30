import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdomReact from '../../jsdomReact';
import React from 'react/addons';
import PlayerTile from '../../../app/components/PlayerTile';

const { TestUtils } = React.addons;
const expect = chai.expect;
chai.use(sinonChai);

function setup() {
  const commands = {
    cast: sinon.spy()
  }
  const component = TestUtils.renderIntoDocument(<PlayerTile health={100} name={'bob'} {...commands} />);
  return {
    component: component,
    commands: commands,
    stats: TestUtils.scryRenderedDOMComponentsWithClass(component, 'stats').map(listItem => {
      return listItem.getDOMNode();
    }),
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button.getDOMNode();
    }),
    header: TestUtils.findRenderedDOMComponentWithTag(component, 'h1').getDOMNode()
  };
}

describe('PlayerTile component', () => {
  jsdomReact();

  it('displays health', () => {
    const { stats } = setup();
    expect(stats[0].textContent).to.match(/^Health: 100/);
  });

  it('displays name', () => {
    const { header } = setup();
    expect(header.textContent).to.match(/^bob/);
  });

  it('calls the cast command', () => {
    const { buttons, commands } = setup();
    TestUtils.Simulate.click(buttons[0]);
    expect(commands.cast).to.have.been.called;
  });
});
