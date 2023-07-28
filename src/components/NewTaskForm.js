import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(text, category);
    setText("");
    setCategory("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={event => setText(event.target.value)} />
      </label>
      <label>
        Category
        <input type="text" name="category" value={category} onChange={event => setCategory(event.target.value)}/>
      </label>
      <input type="submit" value="Add task" />
    </form>
  )
}

export default NewTaskForm;