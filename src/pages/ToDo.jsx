import { useEffect, useState } from "react";
import { ToDoForm } from "../components/ToDoForm.jsx";
import { ToDoList } from "../components/ToDoList.jsx";
import { Navbar } from "../components/Navbar.jsx";

export function ToDo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ToDoItems");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ToDoItems", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (title) => {
    setTodos((prev) => {
      return [...prev, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const deleteToDo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggleToDo = (id, completed) => {
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
      <Navbar />
      <ToDoForm onSubmit={addToDo} />
      <h1 className="header">Here are your tasks</h1>
      {todos.length == 0 ? (
        <h3>No tasks available</h3>
      ) : (
        <ToDoList
          deleteToDo={deleteToDo}
          toggleToDo={toggleToDo}
          todos={todos}
        />
      )}
    </>
  );
}
