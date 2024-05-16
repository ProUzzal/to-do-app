import React, { useState } from "react";

export default function Task({ task, onEditAndComplete, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const [isCheck, setIsCheck] = useState(task.done);

  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={(e) => {
          const isCheck = e.target.checked;
          setIsCheck(isCheck);
          onEditAndComplete(task.id, taskText, isCheck);
        }}
        name=""
        id=""
      />
      {isEditing ? (
        <input
          type="text"
          name=""
          id=""
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      ) : (
        <p>{task.text}</p>
      )}

      {isEditing ? (
        <button
          className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-green-600 hover:text-white m-1 "
          onClick={() => {
            setIsEditing(!isEditing);
            onEditAndComplete(task.id, taskText, isCheck);
          }}
        >
          Save
        </button>
      ) : (
        <button
          className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-green-300 m-1"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
      )}
      <button
        className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-red-600 hover:text-white m-1 "
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
