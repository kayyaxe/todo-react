import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
