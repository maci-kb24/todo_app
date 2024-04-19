import PropTypes from "prop-types";
import { useState } from "react";
import Item from "./Item";


function TodoList({ todos, onDeleteItem, onToggleItem }) {
    const [sortBy, setSortBy] = useState("all");
  
    let sortedItems;
  
    if (sortBy === "all") {
      sortedItems = todos;
    } else if (sortBy === "title") {
      sortedItems = todos.sort((a, b) => a.todo.localeCompare(b.todo));
    } else if (sortBy === "checked") {
      sortedItems = todos.filter((todo) => todo.checked);
    }   
  
    return (
      <div className="todo-list">
        <ul style={{ listStyle: "none" }}>
          {sortedItems && sortedItems.map((todo) => (
            <Item
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              todo={todo}
              key={todo.id}
            />
          ))}
        </ul>
        <div className="actions" style={{ position: "absolute", top: "49.5%", left: "63%" }}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="all">All</option>
            <option value="title">Title</option>
            <option value="checked">Checked</option>
          </select>
        </div>
      </div>
    );
  }
  
  
  
  TodoList.propTypes = {
    todos: PropTypes.any,
    onDeleteItem: PropTypes.func,
    onToggleItem: PropTypes.func,
  };

  export default TodoList;