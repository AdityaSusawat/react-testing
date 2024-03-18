import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, deleteToDo, toggleToDo }) {
  return (
    <ul className="list">
      {todos.map((e) => (
        <ToDoItem
          key={e.id}
          {...e}
          toggleTodo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
}
