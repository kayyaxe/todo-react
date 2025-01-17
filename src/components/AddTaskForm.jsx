import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
