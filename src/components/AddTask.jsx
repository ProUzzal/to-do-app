import React, { useState } from "react";

export default function AddTask({ onAdd, addNewTask, newTask }) {
  return (
    <div className="py-2">
      {}
      <input
        className="border border-black px-2"
        type="text"
        placeholder="add a task"
        value={newTask}
        onChange={(e) => addNewTask(e.target.value)}
      />
      <button
        className="border bg-white border-black hover:bg-gray-600 hover:text-white px-3"
        onClick={() => onAdd(newTask)}
      >
        Add{" "}
      </button>
    </div>
  );
}
