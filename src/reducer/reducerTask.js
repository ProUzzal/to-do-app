export default function reducerTask(draft, action) {
  console.log("reducer call", action);
  switch (action.type) {
    case "added": {
      if (action.text.trim() === "") {
        console.log("Let see");
      } else {
        draft.push({
          id: action.id,
          text: action.text,
          done: false,
        });
      }
      break;
    }
    case "changed":
      {
        if (action.task.text.trim() === "") {
          alert("Must enter a taski");
        } else {
          const index = draft.findIndex((task) => task.id === action.task.id);

          draft[index].text = action.task.text;
          draft[index].done = action.task.done;
        }
      }
      break;
    case "deleted":
      return draft.filter((task) => task.id != action.id);

    default:
      throw Error("Unknown action: " + action.type);
  }
}
