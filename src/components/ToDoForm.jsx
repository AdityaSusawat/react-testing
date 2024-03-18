import { useState } from "react";

export function ToDoForm({ onSubmit }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">NEW ITEM</label>
        <input
          type="text"
          id="item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        ADD TASK
      </button>
    </form>
  );
}
