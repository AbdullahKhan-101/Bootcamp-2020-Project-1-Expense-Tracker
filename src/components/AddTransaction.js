import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      addTransaction({
        id: new Date().getTime(),
        amount: +amount,
        description: description,
      });
      setAmount("");
      setDescription("");
    } else {
      alert("Please provide information");
    }
  };

  return (
    <div>
      <h3 className="new_heading">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Details Here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount Here"
          />
        </div>
        <button className="submit" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
