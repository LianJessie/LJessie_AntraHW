import { createContext, useContext, useState } from 'react'
import './App.css'

const font = {
  fontWeight: 600,
};

function App() {

  const FontContext = createContext(font);

  const [tasks, setTasks] = useState<string[]>([
    "Clean bird cage",
    "Buy groceries",
    "Make a snack",
  ]);

  const Header1 = () => {
    const {fontWeight} = useContext(FontContext);
    return (
      <h1 style = {{fontWeight: fontWeight}}>To-do List</h1>
    )
  }

  const addTask = () => {
    const task = (document.getElementById("new_task") as HTMLInputElement)!.value;

    if (task !== "") {
      setTasks(
        tasks.concat([task])
      );
    }
  }

  const deleteTask = (task: string) => {
    setTasks(tasks.filter((t: string) => t !== task));
  };

  return (
    <FontContext value={font}>
      <Header1 />

      <input id="new_task" type="text" />
      <button className="add" onClick={addTask}>Add</button>
      <hr />

      {tasks.map((task) => {
        return <div className = "event_row">
          <input type="checkbox" />
          <label>{task}</label>
          <button className="delete" onClick={() => deleteTask(task)}>Trash</button>
        </div>;
      })}
    </FontContext>
  )
}

export default App
