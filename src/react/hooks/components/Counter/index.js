import React from 'react';

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter + 1};
    case 'decrement':
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={dispatch({type: 'decrement'})}>-</button>
      {state.counter}
    </div>
  );
}

export default Counter;
