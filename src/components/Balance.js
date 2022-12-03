import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((item) => item.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div style={{ margin: "15px 0" }}>
      <h3>Current Balance</h3>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
