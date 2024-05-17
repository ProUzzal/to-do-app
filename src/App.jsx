import { useState } from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { initialTasks } from "./data/Data";
function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function getNextId(data) {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  }
  // const nextId = getNextId(tasks);

  function handleAddTask(newTaskText) {
    if (newTaskText.trim() == "") {
      alert("Must add a task");
    } else {
      setTasks([
        ...tasks,
        { id: getNextId(tasks), text: newTaskText, done: false },
      ]);
    }
  }

  //edit and completion task

  function hanldeChangeTask(t) {
    if (t.text.trim() === "") {
      alert("Must enter a text");
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === t.id ? { ...task, text: t.text, done: t.done } : task
        )
      );
    }
  }
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }
  return (
    <div className="w-3/4 mx-auto bg-cyan-700 text-center">
      <h2 className="text-5xl text-rose-600">TO DO APP</h2>
      <AddTask onAdd={handleAddTask} />
      <TasksList
        tasks={tasks}
        onChangeTask={hanldeChangeTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
