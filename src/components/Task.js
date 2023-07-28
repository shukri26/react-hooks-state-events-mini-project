import React from "react";

function Task({category, text, task, click}) {
  return (
    <div className="task">
      <ol>
        <li>{text}</li>
        <li>{category}</li>
        <li>
          <button onClick={() => click(task)}>DELETE</button>
        </li>
      </ol>
    </div>
  );
}

export default Task;