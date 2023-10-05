// import { AiFillDelete } from 'react-icons/fa';

import { useState,useEffect } from "react";
import { Todos } from './components/Todos'

export const App = () => {

  const [todos, setTodos]=useState([
    {id:1, text:"Learn React", done: false},
    {id:2, text:"Eat dinner", done: false},
    {id:3, text:"Go to sleep", done: false},
  ]);
  const [newTodo, setNewTodo]=useState("");


  function markTodoAsDone(todo){
    // console.log(todo);
    setTodos([
      ...todos.map(item => (item.id === todo.id) ? 
      {id:item.id,text:item.text,done:!item.done}
      : item
      )
    ])
  }

  function addNewTodo(){
    if (newTodo.trim() !== "") {
      let newObject = {
        id: Math.floor(Math.random() * 1000) + 1, 
        text: newTodo,
        done: false,
      }
      setTodos([...todos, newObject])
      setNewTodo("")
    }
  }

  function deleteTodo(todoToDelete) {
    const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(updatedTodos);
  }

  return(
    <div id="app">
      <input 
        type="text"
        placeholder="Enter a task"
        value={newTodo}
        onChange={(e)=>{setNewTodo(e.target.value)}}
       />
       <button onClick={addNewTodo}>Add Task</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} deleteTodo={deleteTodo}></Todos>
      {/* <AiFillDelete/> */}
    </div>
  )
}