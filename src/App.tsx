import { useState } from "react";
import "./App.css";
import ExpenceList from "./components/ExpenceList";
import ExpenceFilter from "./components/ExpenceFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expence) => expence.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1>Expence Tracker</h1>
      <div className="div mb-3">
        <ExpenceFilter
          onSelectCategory={(category) => onSelectCategory(category)}
        />
      </div>
      <ExpenceList expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
}

export default App;
