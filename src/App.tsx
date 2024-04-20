import { useState } from "react";
import "./App.css";
import ExpenceList from "./components/ExpenceList";
import ExpenceFilter from "./components/ExpenceFilter";
import ExpenceForm from "./components/ExpenceForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
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
      <div className="mb-5">
        <ExpenceForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
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
