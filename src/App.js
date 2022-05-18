import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import ListItem from './ListItem';
import todoListData from "./data.json";

const Header = () => {
  return (
    <header>
    <h1>React To-Do-List</h1>
    </header>
  );
}

const App = () => {

  const [todo, setTodo] = useState({name:""});
  const [todoList, setTodoList] = useState(todoListData.Items);

  const completeItem = (id) => {
    const updatedTodoList = todoList.map(
      item => (item.id === id ? { ...item, complete: true } : item)
    );
    setTodoList(updatedTodoList);
  }

  // this does not work yet
  const removeItem = (id) => {
    let updatedTodoList = [];
    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      if (todo.id !== id) updatedTodoList.push(todo);
    }
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <Header />
      <div id="container">
        <div className="todolist">
          <header>
            <Form 
              todo={todo} 
              setTodo={setTodo} 
              todoList={todoList} 
              setTodoList={setTodoList}
            />
          </header>
          <ul>
            {todoList.map((item) => (
              <ListItem 
                key={item.id} 
                item={item} 
                completeItem={ () => completeItem(item.id) }
                removeItem={ () => removeItem(item.id) } 
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;