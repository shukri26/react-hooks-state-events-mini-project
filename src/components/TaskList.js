import React from "react";
import Task from "./Task";

function TaskList({ tasks, click }) {
  return (
    <div className="tasks">
      {tasks.map((task) => 
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          task={task} 
          click={click} 
        />
      )}
    </div>
  )
}

export default TaskList;