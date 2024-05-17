import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, onChangeTask, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
