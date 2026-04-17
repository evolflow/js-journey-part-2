import { useState } from "react";
import DisciplineForm from "./components/DisciplineForm.jsx";
import DisciplineList from "./components/DisciplineList.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <div className="tracker-card">
        <h1>Discipline Tracker 🔥</h1>

        <DisciplineForm tasks={tasks} setTasks={setTasks} />

        <p className="task-count">Tasks: {tasks.length}</p>

        <DisciplineList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
