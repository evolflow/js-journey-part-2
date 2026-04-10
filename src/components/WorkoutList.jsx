function WorkoutList({ workouts, setWorkouts, filter, search }) {
  const filteredWorkouts = workouts
    .filter((workout) => {
      if (filter === "done") return workout.done;
      if (filter === "active") return !workout.done;
      return true;
    })
    .filter((workout) =>
      workout.text.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div>
      {filteredWorkouts.map((workout, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={workout.done}
            onChange={() => {
              const newList = workouts.map((item, i) => {
                if (i === index) {
                  return { ...item, done: !item.done };
                }
                return item;
              });

              setWorkouts(newList);
            }}
          />

          <span
            style={{
              textDecoration: workout.done ? "line-through" : "none",
              marginLeft: "10px",
            }}
          >
            {workout.text}
          </span>

          <button
            onClick={() => {
              const newList = workouts.filter((_, i) => i !== index);
              setWorkouts(newList);
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

export default WorkoutList;
