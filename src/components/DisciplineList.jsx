import { useState } from "react";

function DisciplineList({ tasks, allTasks, setTasks }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Start your discipline.</p>;
  }

  function saveEdit(taskId) {
    if (editText.trim() === "") return;

    const newTasks = allTasks.map((item) =>
      item.id === taskId ? { ...item, text: editText } : item,
    );

    setTasks(newTasks);
    setEditingId(null);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                const newTasks = allTasks.map((item) =>
                  item.id === task.id ? { ...item, done: !item.done } : item,
                );

                setTasks(newTasks);
              }}
            />

            {editingId === task.id ? (
              <div className="edit-row">
                <input
                  type="text"
                  autoFocus
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveEdit(task.id);
                    }

                    if (e.key === "Escape") {
                      setEditingId(null);
                    }
                  }}
                />

                <button onClick={() => saveEdit(task.id)}>💾</button>
              </div>
            ) : (
              <span className={`task-text ${task.done ? "done" : ""}`}>
                {task.text}
                <span
                  className={`category-badge ${(task.category || "life")
                    .trim()
                    .toLowerCase()}`}
                >
                  {task.category || "Life"}
                </span>
              </span>
            )}
          </div>

          {editingId !== task.id && (
            <button
              onClick={() => {
                setEditingId(task.id);
                setEditText(task.text);
              }}
            >
              ✏️
            </button>
          )}

          <button
            className="delete-btn"
            onClick={() => {
              const newTasks = allTasks.filter((item) => item.id !== task.id);
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
