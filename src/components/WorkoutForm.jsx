import { useState } from "react";

function WorkoutForm({ workouts, setWorkouts }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setWorkouts([...workouts, { text: text, done: false }]);
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter workout..."
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default WorkoutForm;
