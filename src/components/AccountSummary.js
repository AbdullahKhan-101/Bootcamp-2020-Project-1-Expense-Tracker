import React from "react";

const AccountSummary = () => {
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 12px 4px rgba(0, 0, 0, .05)",
      }}
    >
      <div style={{ borderRight: "1px solid lightgray", paddingRight: "25px" }}>
        <h4>INCOME</h4>
        <p
          className="money plus"
          style={{ color: "green", fontSize: "22px", fontWeight: "600" }}
        >
          $0.00
        </p>
      </div>
      <div style={{ paddingLeft: "25px" }}>
        <h4>EXPENSE</h4>
        <p
          style={{ color: "darkred", fontSize: "22px", fontWeight: "600" }}
          className="money minus"
        >
          $0.00
        </p>
      </div>
    </div>
  );
};

export default AccountSummary;
