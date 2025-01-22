import React from 'react';
import TaskItem from './TaskItem';  // Import TaskItem component

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Add a unique key for React
          task={task}  // Pass task as a prop to TaskItem
          onEdit={onEdit} // Test edit handler
          onDelete={onDelete}  // Pass onDelete function
          onToggleComplete={onToggleComplete}
          
        />
      ))}
    </ul>
  );
}

export default TaskList;
