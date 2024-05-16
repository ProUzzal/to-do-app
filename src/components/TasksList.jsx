import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, onEditAndComplete, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditAndComplete={onEditAndComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
