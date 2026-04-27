import { useState } from "react";

function DisciplineForm({ tasks, setTasks }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("Coding");

  function handleAddTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
      category: category,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  return (
    <div className="form-box">
      <input
        type="text"
        placeholder="Enter discipline..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Coding">Coding</option>
        <option value="Dance">Dance</option>
        <option value="Workout">Workout</option>
        <option value="Life">Life</option>
      </select>

      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default DisciplineForm;
