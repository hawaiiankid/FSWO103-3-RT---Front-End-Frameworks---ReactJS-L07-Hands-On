import React from 'react';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    });
  };

  incrementOne = () => {
    this.props.dispatch({
      type:'IncrementOne'
    });
  };


  decrementOne = () => {
    this.props.dispatch({
      type:'DecrementOne'
    });
  };

  incrementFive = () => {
    this.props.dispatch({
      type:'IncrementFive'
    });
  };


  decrementTen = () => {
    this.props.dispatch({
      type:'DecrementTen'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'RESET'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <br />


          <button onClick={this.incrementOne}>Increment by 1</button>
          <br />
          <button onClick={this.decrementOne}>Decrement by 1</button>
          <br />

          <button onClick={this.incrementFive}>Increment by 5</button>
          <br />
          <button onClick={this.decrementTen}>Decrement by 10</button>
          <br />


          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);