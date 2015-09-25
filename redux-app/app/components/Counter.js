import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  displayName: 'Counter'
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
        Clicked: { counter } times
        { ' ' }
        <button onClick={increment}>+</button>
        { ' ' }
        <button onClick={decrement}>_</button>
        { ' ' }
        <button onClick={incrementIfOdd}>Increment if odd</button>
        { ' ' }
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired
};

export default Counter;
