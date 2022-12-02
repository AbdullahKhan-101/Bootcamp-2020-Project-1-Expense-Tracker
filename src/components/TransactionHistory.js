import React from "react";

const TransactionHistory = () => {
  return (
    <div>
      <h3
        style={{
          borderBottom: "1px solid lightgray",
          marginBottom: "12px",
          paddingBottom: "6px",
        }}
      >
        Transaction History
      </h3>
      <ul style={{ listStyle: "none" }} className="list">
        <li
          className="plus"
          style={{
            backgroundColor: "white",
            marginBottom: "8px",
            fontSize: "18px",
            padding: "10px",
            borderRight: "4px solid green",
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          Project 1 income <span>$1,000</span>
          <button
            style={{
              position: "absolute",
              left: "-24px",
              border: "none",
              fontSize: "18px",
              backgroundColor: "darkred",
              outline: "none",
              color: "white",
              padding: "2px 6px",
              cursor: "pointer",
            }}
            className="delete_btn"
          >
            X
          </button>
        </li>
        <li
          style={{
            backgroundColor: "white",
            marginBottom: "8px",
            fontSize: "18px",
            padding: "10px",
            borderRight: "4px solid darkred",
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
          }}
          className="minus"
        >
          Project 1 salary <span>-$5,000</span>
          <button
            style={{
              position: "absolute",
              left: "-24px",
              border: "none",
              fontSize: "18px",
              backgroundColor: "darkred",
              outline: "none",
              color: "white",
              padding: "2px 6px",
              cursor: "pointer",
            }}
            className="delete_btn"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionHistory;
