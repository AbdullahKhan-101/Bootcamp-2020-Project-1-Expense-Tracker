import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((item) => item.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="account_summary">
      <div className="income_container">
        <h4>INCOME</h4>
        <p className="money plus">${income}</p>
      </div>
      <div className="expense_container">
        <h4>EXPENSE</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default AccountSummary;
