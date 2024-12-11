import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          removeTask={removeTask} 
        />
      ))}
    </ul>
  );
}

export default TodoList;