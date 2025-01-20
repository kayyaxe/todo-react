import React from 'react';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <li >
      <label className={task.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={task.completed} // Show checked if the task is completed
          onChange={() => onToggleComplete(task.id)} // Toggle complete on change
        />
        {task.title}
      </label>
      
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </li>
  );
}

export default TaskItem;
