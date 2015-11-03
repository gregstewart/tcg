import { expect } from 'chai';
import jsdomReact from '../../jsdomReact';
import React from 'react/addons';
import { Provider } from 'react-redux';
import App from '../../../app/containers/App';
import configureStore from '../../../app/store/configureStore';

const { TestUtils } = React.addons;

function setup(initialState) {
  const store = configureStore(initialState);
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      {() => <App />}
    </Provider>
  );

  return {
    app: app,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(app, 'button').map(button => {
      return button.getDOMNode();
    }),
    li: TestUtils.findRenderedDOMComponentWithClass(app, 'stats').getDOMNode()
  };
}

describe('containers', () => {
  jsdomReact();

  describe('App', () => {
    it('displays the initial player tile', () => {
      const { li } = setup();
      expect(li.textContent).to.match(/^Health: 100/);
    });

    xit('displays an updated count after increment button clicked', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[0]);
      expect(p.textContent).to.match(/^Clicked: 1 times/);
    });

    xit('displays a updated count after decrement button is clicked', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[1]);
      expect(p.textContent).to.match(/^Clicked: -1 times/);
    });

    xit('does not display an updated count if count is even and if odd button is clicked', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[2]);
      expect(p.textContent).to.match(/^Clicked: 0 times/);
    });

    xit('does display an updated count if count is odd and if odd button is clicked', () => {
      const { buttons, p } = setup({ counter: 1 });
      TestUtils.Simulate.click(buttons[2]);
      expect(p.textContent).to.match(/^Clicked: 2 times/);
    });
  });
});
