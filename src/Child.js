import React, { useContext } from "react";
import ValueContext from "./ValueContext";

const Child = () => {
  const value = useContext(ValueContext);

  return (
    <div>
      <h1>My age is {value}</h1>
      <button onClick={() => value[1](value[0] + 1)}>Update Now</button>
    </div>
  );
};

export default Child;
