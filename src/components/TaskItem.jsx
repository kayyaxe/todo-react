import React, { useState } from 'react';

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedTitle, setEditedTitle] = useState(task.title); // State to store the edited title

  const handleEditClick = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleSaveClick = () => {
    if (editedTitle.trim()) {
      onEdit(task.id, editedTitle); // Call the parent onEdit function
      setIsEditing(false); // Disable edit mode
    } else {
      alert('Task title cannot be empty.');
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Disable edit mode
    setEditedTitle(task.title); // Reset edited title to original
  };

  return (
    <li>
      {isEditing ? (
        <div class="split-left-right">
          {/* Edit mode: show input field and save/cancel buttons */}
          <input
            id = "editTaskField"
            type="textfield"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)} // Update the edited title as the user types
          />
          <div>
            <button className="right-button" onClick={handleSaveClick}>
            ✔️
            </button>
            <button className="right-button" onClick={handleCancelClick}>
            ❌
            </button>
          </div>

        </div>
      ) : (
        <div class="split-left-right">
          {/* View mode: show task title and edit/delete buttons */}
          <label className={(task.completed ? 'completed' : '') + ' task-label'}>
            <input
              type="checkbox"
              checked={task.completed} // Show checked if the task is completed
              onChange={() => onToggleComplete(task.id)} // Toggle complete on change
            />
            {task.title}
          </label>
          <div>
            <button className="right-button" onClick={handleEditClick}>
              ✏️ 
            </button>
            <button className="right-button" onClick={() => onDelete(task.id)}>
              🗑️ 
            </button>
          </div>
          
        </div>
      )}
    </li>
  );
}

export default TaskItem;
