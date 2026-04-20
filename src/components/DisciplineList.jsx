function DisciplineList({ tasks, setTasks }) {
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

            <span className={`task-text ${task.done ? "done" : ""}`}>
              {task.text}
            </span>
          </div>

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
