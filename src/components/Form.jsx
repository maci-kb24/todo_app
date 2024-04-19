import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function Form({ onAdditem }) {
    const [todoInput, setTodoInput] = useState("");
    
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!todoInput) return;
      const newTodo = { id: Date.now(), todo: todoInput, checked: false };
      onAdditem(newTodo);
      setTodoInput("");
    }
  
    return (
      <div className="add-form">
        <form
          onSubmit={handleSubmit}
          style={{
            width: "500px",
            backgroundColor: "white",
            padding: "60px 80px",
            position: "relative",
          }}
        >
          <div>
            {" "}
            <h1 className="todo-title">TODO LIST</h1>
          </div>
          <div style={{ position: "relative" }}>
          <input
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            type="text"
            placeholder="Search Note"
            style={{
              width: "100%",
              padding: "8px 30px 8px 40px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <button>
            <CiSearch className="search-icon" size={"20px"} />
          </button>
          </div>
         
         
        </form>
      </div>
    );
  }

  Form.propTypes = {
    onAdditem: PropTypes.func,
  };

  export default Form;