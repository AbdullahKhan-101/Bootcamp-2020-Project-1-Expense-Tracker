import React, { useState } from "react";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div>
      <h3
        style={{
          borderBottom: "1px solid lightgray",
          marginTop: "20px",
          marginBottom: "12px",
          paddingBottom: "6px",
        }}
      >
        Add New Transaction
      </h3>
      <form>
        <div className="form_control">
          <label htmlFor="description"></label>
          <input
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              padding: "10px",
              fontSize: "16px",
            }}
            type="text"
            id="description"
            placeholder="Enter Details Here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label htmlFor="amount"></label>
          <input
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              padding: "10px",
              fontSize: "16px",
              marginTop: "10px",
            }}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter Amount Here"
          />
        </div>
        <button
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            padding: "10px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
            backgroundColor: "darkcyan",
            color: "white",
            fontWeight: "600",
          }}
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
