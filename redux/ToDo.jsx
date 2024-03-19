import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  deleteAllCompleted,
} from "./toDoSlice";
import { useRef, useState } from "react";

export default function ToDo() {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo);
  console.log(toDoList);

  const [taskDescription, setTaskDescription] = useState("");
  const taskDescriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskDescription));
    setTaskDescription("");
    taskDescriptionRef.current.focus();
  };

  const handleCheckBox = (e) => {
    const taskID = e.target.value;
    dispatch(toggleCompleted(parseInt(taskID)));
  };

  const handleDeleteAllCompleted = () => {
    dispatch(deleteAllCompleted());
    taskDescriptionRef.current.focus();
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            ref={taskDescriptionRef}
          />
          <button disabled={!taskDescription.trim().length}>ADD TASK</button>
        </form>

        <button onClick={handleDeleteAllCompleted}>
          DELETE ALL COMPLETED TASKS
        </button>

        <h1 style={{ margin: "30px" }}>Here are your tasks</h1>
        <ul>
          {toDoList.length > 0
            ? toDoList.map((task) => (
                <li key={task.id} style={{ margin: "10px" }}>
                  <input
                    type="checkbox"
                    id={task.id}
                    value={task.id}
                    checked={task.completed}
                    onChange={handleCheckBox}
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
                  <button onClick={() => dispatch(deleteTask(task.id))}>
                    DELETE
                  </button>
                </li>
              ))
            : "No tasks available"}
        </ul>
      </div>
    </>
  );
}
