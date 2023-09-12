// Task.js
import React from "react";

function Task({ task, onDeleteTask }) {
  const { text, category } = task;

  const handleDeleteClick = () => {
    onDeleteTask(task.id); // Pass the task id to the onDeleteTask function
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;


