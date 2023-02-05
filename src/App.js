import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import "./style.css";

const initialData = [
  { id: 1, title: "learn react" },
  { id: 2, title: "read react" },
  { id: 3, title: "write react" },
];

function App() {
  const [task, setTask] = useState(initialData);

  const onRemove = (id) => {
    setTask(task.filter((elem) => elem.id !== id));
  };

 const editTask = (title) => {
  setTask(title)
 }
  

  return (
    <div className="App">
      <section class="todoapp">
        <NewTaskForm task={task} setTask={setTask}/>
        <TaskList task={task} setTask={setTask} onRemove={onRemove} editTask={editTask} />
      </section>
    </div>
  );
}

export default App;
