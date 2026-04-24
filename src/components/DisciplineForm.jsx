import { useState } from "react";

function DisciplineForm({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  function handleAddTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
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
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />

      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default DisciplineForm;
