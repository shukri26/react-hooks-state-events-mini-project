import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  }

  const handleTaskDelete = (task) => {
    setTasks(tasks.filter(t => t !== task));
  }

  const handleTaskFormSubmit = (text, category) => {
    setTasks([...tasks, { text, category }]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        click={handleCategoryFilter} 
        selectedCategory={categoryFilter} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList 
        tasks={tasks.filter(task => categoryFilter === "All" || task.category === categoryFilter)} 
        click={handleTaskDelete} 
      />
    </div>
  )
}

export default App;