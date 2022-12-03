import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Transaction = ({ transaction }) => {
  const sign = +transaction.amount > 0 ? "plus" : "minus";

  const { deleteTransaction } = useContext(GlobalContext);

  const delete_Transaction = (id) => {
    deleteTransaction(id);
  };

  return (
    <>
      <li className={`transaction ${sign}`}>
        {transaction.description}
        <span>${transaction.amount}</span>
        <button
          className="delete_btn"
          onClick={() => delete_Transaction(transaction.id)}
        >
          X
        </button>
      </li>
    </>
  );
};

export default Transaction;
