import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";

//! How to prevent textField from resetting when I only change the state of checkbox? Used setTimeout for now
//* Using controlled state is better. Problem solved with useState

export default function Random() {
  const [toDoList, setToDoList] = useState([
    { id: 1, description: "First sample to do", completed: false },
  ]);

  useEffect(() => {
    console.log(JSON.stringify(toDoList));
  });

  const handleCheckBox = (e) => {
    const { checked, value } = e.target;
    setToDoList((prev) =>
      prev.map((task) =>
        task.id !== parseInt(value)
          ? task
          : { ...task, completed: checked ? true : false }
      )
    );
  };

  const [taskDescription, setTaskDescription] = useState("");
  const taskRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newID =
      toDoList.length > 0 ? Math.max(...toDoList.map((t) => t.id)) + 1 : 1;
    setToDoList((prev) => [
      ...prev,
      { id: newID, description: taskDescription, completed: false },
    ]);
    setTaskDescription("");
    taskRef.current.focus();
  };

  const handleDelete = (id) => {
    setToDoList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDeleteAllCompleted = () => {
    setToDoList((prev) => {
      const hasCompletedTask = prev.some((task) => task.completed === true);

      if (hasCompletedTask) {
        return prev.filter((task) => task.completed === false);
      }

      return prev;
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={taskDescription}
            ref={taskRef}
            onChange={(e) => setTaskDescription(e.target.value)}
          />{" "}
          <button>ADD</button>
        </form>
        <button onClick={handleDeleteAllCompleted}>CLEAR ALL COMPLETED</button>
        <ul style={{ marginTop: "40px" }}>
          {toDoList.length !== 0
            ? toDoList.map((task) => (
                <li key={task.id}>
                  <span>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={handleCheckBox}
                      value={task.id}
                      id={task.id}
                    />
                    {!task.completed ? (
                      <label htmlFor={task.id} style={{ margin: "30px" }}>
                        {task.description}
                      </label>
                    ) : (
                      <label
                        htmlFor={task.id}
                        style={{
                          textDecoration: "line-through",
                          margin: "30px",
                        }}
                      >
                        {task.description}
                      </label>
                    )}
                    <button
                      onClick={() => handleDelete(task.id)}
                      style={{ scale: "100%" }}
                    >
                      DELETE
                    </button>
                  </span>
                </li>
              ))
            : "Empty ToDo List"}
        </ul>
      </div>
    </>
  );
}
