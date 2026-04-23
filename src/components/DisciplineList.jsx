import { useState } from "react";

function DisciplineList({ tasks, setTasks }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                const newTasks = tasks.map((item, i) =>
                  i === index ? { ...item, done: !item.done } : item,
                );
                setTasks(newTasks);
              }}
            />
            {editingIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className={`task-text ${task.done ? "done" : ""}`}>
                {task.text}
              </span>
            )}
          </div>

          <button
            onClick={() => {
              setEditingIndex(index);
              setEditText(task.text);
            }}
          >
            ✏️
          </button>

          {editingIndex === index && (
            <button
              onClick={() => {
                const newTasks = tasks.map((item, i) =>
                  i === index ? { ...item, text: editText } : item,
                );
                setTasks(newTasks);
                setEditingIndex(null);
              }}
            >
              💾
            </button>
          )}

          <button
            className="delete-btn"
            onClick={() => {
              const newTasks = tasks.filter((_, i) => i !== index);
              setTasks(newTasks);
            }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisciplineList;
