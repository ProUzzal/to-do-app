import { useState } from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { initialTasks } from "./data/Data";
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  // add task functionality

  function findNextId(list) {
    let maxId = 0;
    list.forEach((element) => {
      maxId = element.id > maxId ? element.id : maxId;
    });
    return maxId + 1;
  }

  const nextId = findNextId(tasks);

  function handleAddTask(newTask) {
    if (newTask.trim() === "") {
      alert("Must enter a task");
    } else {
      setTasks([...tasks, { id: nextId, text: newTask, done: false }]);
    }
    setNewTask("");
  }

  //edit and completion task

  function editAndComplete(id, editedText, status) {
    if (editedText.trim() === "") {
      alert("Must enter a task");
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: editedText, done: status } : task
        )
      );
    }
  }

  function handleDeleteTask(id) {
    console.log(id);
    setTasks(tasks.filter((task) => task.id != id && task));
  }
  return (
    <div className="w-3/4 mx-auto bg-cyan-700 text-center">
      <h2 className="text-5xl text-rose-600">TO DO APP</h2>
      <AddTask
        onAdd={handleAddTask}
        addNewTask={(taskText) => setNewTask(taskText)}
        newTask={newTask}
      />
      <TasksList
        tasks={tasks}
        onEditAndComplete={editAndComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
