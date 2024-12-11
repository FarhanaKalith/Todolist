import React, { useState } from 'react';

function TodoInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddClick = () => {
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Enter a task"
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}

export default TodoInput;