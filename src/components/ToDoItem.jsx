export function ToDoItem({ id, title, completed, toggleTodo, deleteToDo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        Delete
      </button>
    </li>
  );
}
