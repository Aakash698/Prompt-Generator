"use client";
import React from "react";
import { useState } from "react";

function EditTodo({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholeder="Enter your text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTodo;
