import React from 'react';
import TaskItem from './TaskItem';  // Import TaskItem component

function TaskList({ tasks, onDelete, onToggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Add a unique key for React
          task={task}  // Pass task as a prop to TaskItem
          onDelete={onDelete}  // Pass onDelete function
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
