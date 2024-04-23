import React, { useState } from "react";

export default function Form({ addTodo, setInputValue, inputValue }) {
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
    </>
  );
}
