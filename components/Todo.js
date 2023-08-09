import React from "react";
export const Todo1 = ({ task, deleteTodo, editTodo }) => {
  return (
    <div>
      <p>{task?.task}</p>
      <button onClick={() => editTodo(task?.id)}>Edit</button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  );
};
