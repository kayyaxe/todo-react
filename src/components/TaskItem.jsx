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
        <div>
          {/* Edit mode: show input field and save/cancel buttons */}
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)} // Update the edited title as the user types
          />
          <button className="save-button" onClick={handleSaveClick}>
          ✔
          </button>
          <button className="cancel-button" onClick={handleCancelClick}>
          ❌
          </button>
        </div>
      ) : (
        <div>
          {/* View mode: show task title and edit/delete buttons */}
          <label className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed} // Show checked if the task is completed
              onChange={() => onToggleComplete(task.id)} // Toggle complete on change
            />
            {task.title}
          </label>
          <button className="edit-button" onClick={handleEditClick}>
            ✏️ 
          </button>
          <button className="delete-button" onClick={() => onDelete(task.id)}>
            🗑️ 
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
