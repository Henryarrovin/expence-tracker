import { useState } from "react";
import "./App.css";
import ExpenceList from "./components/ExpenceList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
    { id: 3, description: "aaa", amount: 10, category: "Utilities" },
    { id: 4, description: "aaa", amount: 10, category: "Utilities" },
    { id: 5, description: "aaa", amount: 10, category: "Utilities" },
  ]);

  const onDelete = (expenceId: number) => {
    const updatedExpence = expenses.filter(
      (expence) => expence.id !== expenceId
    );
    setExpenses(updatedExpence);
  };
  return (
    <>
      <h1>Expence Tracker</h1>
      <ExpenceList expenses={expenses} onDelete={onDelete} />
    </>
  );
}

export default App;
