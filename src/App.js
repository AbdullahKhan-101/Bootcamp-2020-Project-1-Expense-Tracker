import { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import ValueContext from "./ValueContext";

function App() {
  let value = useState(55);
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
