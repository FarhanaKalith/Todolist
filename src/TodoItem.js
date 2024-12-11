import React from 'react';

function TodoItem({ task, toggleTaskCompletion, removeTask }) {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;