import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm.jsx";
import WorkoutList from "./components/WorkoutList.jsx";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Workout Tracker 💪</h1>

      {/* 🔍search */}
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px" }}
      />

      {/* 🔘filter */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("active")}>Active</button>
      </div>

      {/*🔢 counter */}
      <p>Workouts: {workouts.length}</p>

      {/* ➕ form */}
      <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />

      {/* List */}
      <WorkoutList
        workouts={workouts}
        setWorkouts={setWorkouts}
        filter={filter}
        search={search}
      />
    </div>
  );
}
export default App;
