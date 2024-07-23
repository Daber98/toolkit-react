// src/components/TodoList/TodoList.jsx
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button onClick={addTodo} className="add-button">Add</button>
      <ul className="todo-items">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
