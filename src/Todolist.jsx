import React, { useEffect, useState } from "react";
import "./Todolist.css";
import Form from "./Form.jsx";
import ButtonDel from "./Buttondel.jsx";
import DarkMode from "./Darkmode.jsx";

export default function TodoList() {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Be Awesome", completed: false },
    { id: 3, text: "Quentin", completed: false },
  ];
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return initialTodos;
    }
  });

  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };

  return (
    <>
      <Form
        addTodo={addTodo}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <h2>Todos</h2>
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todos) => (
          <li key={todos.id}>
            <span
              className="spanli"
              style={{
                textDecoration: todos.completed ? "line-through" : "none",
              }}
            ></span>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => toggleTodo(todos.id)}
            />
            {todos.text}
            <ButtonDel deleteTodo={deleteTodo} todos={todos} />
          </li>
        ))}
      </ul>
      <DarkMode />
    </>
  );
}
