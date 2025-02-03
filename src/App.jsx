import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';


function App() {
  const [tasks, setTasks] = useState([]);
  const url = 'https://todo-backend-96gx.onrender.com:8080/api/tasks'
  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    axios.get(url)
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task via the backend
  const addTask = (taskTitle) => {
    const newTask = { title: taskTitle, completed: false };
    axios.post(url, newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };
  
  // Delete a task via the backend
  const deleteTask = (taskId) => {
    axios.delete(`${url}/${taskId}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  // Toggle task completion via the backend
  const toggleComplete = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

    axios.put(`${url}/${taskId}`, updatedTask)
      .then(() => setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task))))
      .catch(error => console.error('Error updating task:', error));
  };

  // Edit a task's title via the backend
  const editTask = (taskId, newTitle) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToUpdate, title: newTitle };

    axios
      .put(`${url}/${taskId}`, updatedTask)
      .then(() => setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task))))
      .catch((error) => console.error('Error editing task:', error));

  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask} // Pass the edit handler
      />
    </div>
  );
}


export default App;
