import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === '') return; // Validation for empty task
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoInput addTask={addTask} />
      <TodoList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        removeTask={removeTask} 
      />
    </div>
  );
}

export default App;