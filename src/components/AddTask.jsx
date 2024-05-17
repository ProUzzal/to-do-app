import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [neWTaskText, setNewTaskText] = useState("");
  return (
    <div className="py-2">
      {}
      <input
        className="border border-black px-2"
        type="text"
        placeholder="add a task"
        value={neWTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button
        className="border bg-white border-black hover:bg-gray-600 hover:text-white px-3"
        onClick={() => {
          setNewTaskText("");
          console.log("after clicking add", neWTaskText);
          onAdd(neWTaskText);
        }}
      >
        Add{" "}
      </button>
    </div>
  );
}
