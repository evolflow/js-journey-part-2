function DisciplineList({ tasks, setTasks }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.map((task, index) => (
        <div key={index}>
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

          <span style={{ marginLeft: "10px" }}>{task.text}</span>

          <button
            onClick={() => {
              const newTasks = tasks.filter((_, i) => i !== index);
              setTasks(newTasks);
            }}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisciplineList;
