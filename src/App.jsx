import { useState, useEffect } from "react";
import DisciplineForm from "./components/DisciplineForm.jsx";
import DisciplineList from "./components/DisciplineList.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const doneCount = tasks.filter((task) => task.done).length;
  const progressPercent =
    tasks.length === 0 ? 0 : (doneCount / tasks.length) * 100;

  return (
    <div className="app">
      <div className="tracker-card">
        <h1>Discipline Tracker 🔥</h1>

        <DisciplineForm tasks={tasks} setTasks={setTasks} />

        <p className="task-count">Tasks: {tasks.length}</p>
        <p className="task-count">
          Done: {doneCount} / {tasks.length}
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <button
          onClick={() => setTasks([])}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Clear All
        </button>

        {tasks.some((task) => task.done) && (
          <button
            onClick={() => {
              const newTasks = tasks.filter((task) => !task.done);
              setTasks(newTasks);
            }}
          >
            Clear Completed
          </button>
        )}

        <div className="filter-buttons">
          <button
            className={
              filter === "all" ? "filter-btn active-filter" : "filter-btn"
            }
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={
              filter === "active" ? "filter-btn active-filter" : "filter-btn"
            }
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className={
              filter === "done" ? "filter-btn active-filter" : "filter-btn"
            }
            onClick={() => setFilter("done")}
          >
            Done
          </button>
        </div>

        <DisciplineList
          tasks={filteredTasks}
          allTasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
