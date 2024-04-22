import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Be Awesome", completed: false },
    { id: 3, text: "Quentin", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };
  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <>
      <input
        placeholder="Type a new todo"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={addTodo}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Add Todo
      </button>

      <h2>Todos</h2>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todos) => (
          <li
            key={todos.id}
            style={{
              textDecoration: todos.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => toggleTodo(todos.id)}
            />
            {todos.text}
            <button onClick={() => deleteTodo(todos.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
