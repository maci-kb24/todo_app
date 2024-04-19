import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAdditem(item) {
    setTodos((todos) => [...todos, item]);
  }

  function handleDeleteItem(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleToggleItem(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <div className="App">
      <Form onAdditem={handleAdditem} />
      <TodoList
        todos={todos}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
    </div>
  );
}






