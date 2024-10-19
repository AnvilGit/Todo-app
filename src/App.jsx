import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";

function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ] 

  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);
  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    //update/edit/modify
    let newTodoList = [...todos] //duplicate todos
    let completedTodo = todos[index]  //access the todos specifically that we are completing
    completedTodo['complete'] = true  //modify the status of it, n in my new list i updated and  save that entry to the new list
    newTodoList[index] = completedTodo  //save that entry to the new list
    setTodos(newTodoList) // and overwrite that state to match the newly created
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos) //the state updater function setTodos is called to populate the state with the todos from localStorage.
  }, [])
  
  return (
   <>
    <Header todos={todos} />
    <Tabs 
    selectedTab={selectedTab}
    setSelectedTab={setSelectedTab}
    todos={todos} />
    <TodoList 
    handleCompleteTodo={handleCompleteTodo}
    handleDeleteTodo={handleDeleteTodo} 
    selectedTab={selectedTab} 
    todos={todos} 
    />
    <TodoInput handleAddTodo={handleAddTodo} />
   </>
  )
}

export default App
