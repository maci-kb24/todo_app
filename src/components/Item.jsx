import PropTypes from "prop-types";


function Item({ todo, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <label>
          <input
            style={{
              backgroundColor: todo.checked ? "lightblue" : "transparent",
            }}
            type="checkbox"
            value={todo.checked}
            onChange={() => {
              onToggleItem(todo.id);
            }}
          />
          <span
            style={
              todo.checked
                ? { textDecoration: "line-through", color: "lightgray" }
                : {}
            }
          >
            {todo.todo}
          </span>
        </label>
        <button onClick={() => onDeleteItem(todo.id)}>X</button>
      </li>
    );
  }

  Item.propTypes = {
    item: PropTypes.string,
    onDeleteItem: PropTypes.func,
    todo: PropTypes.object,
    onToggleItem: PropTypes.func,
  };

  export default Item;