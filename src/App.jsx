import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task via the backend
  const addTask = (taskTitle) => {
    const newTask = { title: taskTitle, completed: false };
    axios.post('http://localhost:8080/api/tasks', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };
  

  // Delete a task via the backend
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:8080/api/tasks/${taskId}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  // Toggle task completion via the backend
  const toggleComplete = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

    axios.put(`http://localhost:8080/api/tasks/${taskId}`, updatedTask)
      .then(() => setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task))))
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
}




export default App;
