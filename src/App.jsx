import { useState } from "react";
import "./App.css";
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";


 export default function App() {
  const  [todos, setTodos] = useState([]);

   function handleAdditem(item) {
    setTodos(((todos) => [...todos, item]))
  }

  function handleDeleteItem(id) {
    setTodos((todos) => 
      todos.filter((todo) => 
      todo.id !== id))
  }

  function handleToggleItem(id) {
    setTodos((todos) => 
      todos.map((todo) => 
      todo.id === id ? {...todo, checked: !todo.checked} : todo ))
  }

  return (
    <div className="App">
      <Form onAdditem={handleAdditem} />
      <TodoList todos={todos} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
    </div>
  )
}

function Form({onAdditem}) {
  const  [todoInput, setTodoInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if(!todoInput) return;
    const newTodo = {id: Date.now(), todo: todoInput, checked: false}
    onAdditem(newTodo)
    setTodoInput('');
   
  }

 return (
  <div className="add-form">
    <form onSubmit={handleSubmit} style={{ width: '500px', backgroundColor: 'white', padding: '60px 80px', position: 'relative'}}>
      <h1 className="todo-title">TODO LIST</h1>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" placeholder="Search Note" style={{ width: '100%', padding: '8px 30px 8px 40px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
 />
      <button><CiSearch className="search-icon" size={'20px'} /></button>
      <select name="todos">
        <option value="all">ALL</option>
        <option value="checked">Checked</option>
      </select>
      </form>
  </div>
 )
}

function TodoList({todos, onDeleteItem, onToggleItem }) {
 return (
  <div className="todo-list">
    <ul style={{listStyle: 'none'}}>
    {todos.map(todo => <Item onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} todo={todo} key={todo.id} />)}
    </ul>
  </div>
 )
}

function Item({todo, onDeleteItem, onToggleItem}) {

  return (
    <li>
      <label >
      <input style={{backgroundColor: todo.checked ? 'lightblue' : 'transparent' }} type="checkbox" value={todo.checked} onChange={() => {onToggleItem(todo.id)}}  />
      <span style={todo.checked ? {textDecoration: 'line-through', color: 'lightgray'} : {} }>{todo.todo}</span>
      </label>
      <button onClick={() => onDeleteItem(todo.id)}>X</button>
    </li>
  )
}

TodoList.propTypes = {
  todos: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func
}
Item.propTypes = {
  item: PropTypes.string,
  onDeleteItem: PropTypes.func,
  todo: PropTypes.string,
  onToggleItem: PropTypes.func
}
Form.propTypes = {
  onAdditem: PropTypes.func
}