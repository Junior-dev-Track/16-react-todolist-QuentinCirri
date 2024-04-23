import React, { useState } from "react";

export default function ButtonDel({ deleteTodo, todos }) {
  return (
    <>
      <button
        key={todos.id}
        className="deleteBtn"
        onClick={() => deleteTodo(todos.id)}
        disabled={!todos.completed}
      >
        Delete
      </button>
    </>
  );
}
