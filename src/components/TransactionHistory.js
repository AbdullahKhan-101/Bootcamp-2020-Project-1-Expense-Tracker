import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/globalState";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((item, index) => (
          <Transaction key={index} transaction={item} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
