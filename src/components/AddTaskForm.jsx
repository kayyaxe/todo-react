import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-container">
      <input
        id = "addTaskField"
        type="textfield"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="What's on today's list?"
        required
      />
      <button type="submit" className="add-task-btn">
        +
      </button>
    </form>
  );
}

export default AddTaskForm;
