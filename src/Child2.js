import React, { useReducer } from "react";
import numberRducer from "./numberReducer";

const Child2 = () => {
  const [state, dispatch] = useReducer(numberRducer, 52);

  return (
    <div>
      <h1>I am Child2 {state} </h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", val: 20 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", val: 10 });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child2;
