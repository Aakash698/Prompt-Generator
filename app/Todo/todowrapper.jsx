"use client";
import React from "react";
import { useState } from "react";

function Todo({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
    }
    addTodo(trimmedValue);
    setValue("");
  };
  return (
    <div>
      Todo List
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholeder="Enter your text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todo;
