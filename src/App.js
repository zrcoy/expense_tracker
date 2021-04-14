import { ExpenseItemList } from "./components/expense/ExpenseItemList";
import { expenses } from "./data/expenses";

const App = () => {
  return (
    <div className="App">
      <h2>Get started!</h2>
      <ExpenseItemList expense={expenses} />
    </div>
  );
};

export default App;
