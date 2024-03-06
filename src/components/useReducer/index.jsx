import { useReducer } from "react";

// InitState
const InitState = 0;

// Actions
const DOWN_ACTION = "down";
const UP_ACTION = "up";

// Reducer

const reducer = (state, action) => {
  switch (action) {
    case DOWN_ACTION:
      return state - 1;
    case UP_ACTION:
      return state + 1;
    default:
      throw new Error("Invalid Action !");
  }
};

function ExampleUseReducer() {
  const [count, dispatch] = useReducer(reducer, InitState);

  return (
    <>
      <h1>useReducer Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </>
  );
}

export default ExampleUseReducer;
