import React from 'react';
import TaskItem from './TaskItem';  // Import TaskItem component

function TaskList({ tasks, onDelete, onToggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}  // Pass task as a prop to TaskItem
          onDelete={onDelete}  // Pass onDelete function
        />
      ))}
    </ul>
  );
}

export default TaskList;
