import { useState } from "react";

function DisciplineList({ tasks, setTasks }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Start your discipline.</p>;
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
                const newTasks = tasks.map((item) =>
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
                      if (editText.trim() === "") return;

                      const newTasks = tasks.map((item) =>
                        item.id === task.id
                          ? { ...item, text: editText }
                          : item,
                      );

                      setTasks(newTasks);
                      setEditingId(null);
                    }

                    if (e.key === "Escape") {
                      setEditingId(null);
                    }
                  }}
                />

                <button
                  onClick={() => {
                    if (editText.trim() === "") return;

                    const newTasks = tasks.map((item) =>
                      item.id === task.id ? { ...item, text: editText } : item,
                    );

                    setTasks(newTasks);
                    setEditingId(null);
                  }}
                >
                  💾
                </button>
              </div>
            ) : (
              <span className={`task-text ${task.done ? "done" : ""}`}>
                {task.text}
              </span>
            )}
          </div>

          {/* EDIT BUTTON */}
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

          {/* DELETE BUTTON */}
          <button
            className="delete-btn"
            onClick={() => {
              const newTasks = tasks.filter((item) => item.id !== task.id);
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
