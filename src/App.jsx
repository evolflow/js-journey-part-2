import { useState, useEffect } from "react";
import DisciplineForm from "./components/DisciplineForm.jsx";
import DisciplineList from "./components/DisciplineList.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <div className="tracker-card">
        <h1>Discipline Tracker 🔥</h1>

        <DisciplineForm tasks={tasks} setTasks={setTasks} />

        <p className="task-count">Tasks: {tasks.length}</p>

        <button
          onClick={() => setTasks([])}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Clear All
        </button>

        <DisciplineList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
