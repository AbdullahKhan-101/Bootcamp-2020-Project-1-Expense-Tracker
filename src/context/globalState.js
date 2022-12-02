import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
  transactions: [
    { id: 1, description: "Income 1", amount: 2000 },
    { id: 2, description: "Expense 1", amount: 500 },
    { id: 3, description: "Income 1", amount: 2000 },
  ],
};

// Global Context

export const GlobalContext = createContext(initialState);

//Provider for the Global context
export const GlobalProvider = ({ childer }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {childer}
    </GlobalContext.Provider>
  );
};
