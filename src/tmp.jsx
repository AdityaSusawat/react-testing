import { useState } from "react";
import "./styles.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), title: task, completed: false },
      ];
    });
    setTask("");
  };

  const handleDeleteTask = (index) => {
    setTodos((prev) => {
      const result = [...prev.slice(0, index), ...prev.slice(index + 1)];
      return result;
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.id === id) {
          return { ...e, completed };
        }
        return e;
      });
    });
  };

  return (
    <>
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
      <h1 className="header">Here are your tasks</h1>
      {todos.length == 0 ? (
        <h3>No tasks available</h3>
      ) : (
        <ul className="list">
          {todos.map((e, index) => (
            <li key={e.id}>
              <label>
                <input
                  type="checkbox"
                  checked={e.completed}
                  onChange={(event) => toggleTodo(e.id, event.target.checked)}
                />
                {e.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
