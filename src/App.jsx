import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { initialTasks } from "./data/Data";
import reducerTask from "./reducer/reducerTask";
import { useImmerReducer } from "use-immer";

function App() {
  const [tasks, dispatch] = useImmerReducer(reducerTask, initialTasks);

  function getNextId(data) {
    if (data.length === 0) {
      return 1; // If data is empty, return 1 as the initial ID
    } else {
      const maxId = data.reduce((prev, current) =>
        prev.id > current.id ? prev.id : current.id
      );
      return maxId + 1;
    }
  }
  console.log("reducer", tasks, dispatch);

  function handleAddTask(newTaskText) {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text: newTaskText,
    });
  }

  function hanldeChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id,
    });
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
