import "./App.css";
import AccountSummary from "./components/AccountSummary";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionHistory from "./components/TransactionHistory";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
