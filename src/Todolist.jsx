import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Be Awesome", completed: false },
    { id: 3, text: "Quentin", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };

  return (
    <ul style={{ listStyleType: "none" }}>
      {todos.map((todos) => (
        <li key={todos.id}>
          <input
            type="checkbox"
            checked={todos.completed}
            onChange={() => toggleTodo(todos.id)}
          />
          {todos.text}
        </li>
      ))}
    </ul>
  );
}
