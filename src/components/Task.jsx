import React, { useState } from "react";

export default function Task({ task, onChangeTask, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        {" "}
        <input
          type="text"
          name=""
          id=""
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-green-600 hover:text-white m-1 "
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p>{task.text}</p>
        <button
          className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-green-300 m-1"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
        name=""
        id=""
      />

      {taskContent}
      <button
        className="px-2 py-1 border border-black rounded bg-gray-200 hover:bg-red-600 hover:text-white m-1 "
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
