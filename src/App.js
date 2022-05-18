import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import Search from './Search';
import ListItem from './ListItem';
import data from './data.json';

const Header = () => {
  return (
    <header>
      <h1>React To-Do-List</h1>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>May 2022</p>
    </footer>
  );
}

const App = () => {

  const [todo, setTodo] = useState({name:""});
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("data")) || data.Items);

  const commitChange = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    setTodoList(data);
  }

  const completeItem = (id) => {
    const updatedTodoList = todoList.map(
      item => (item.id === id ? { ...item, complete: true } : item)
    );
    commitChange(updatedTodoList);
  }

  const removeItem = (id) => {
    let updatedTodoList = [];
    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      if (todo.id !== id) updatedTodoList.push(todo);
    }
    commitChange(updatedTodoList);
  }

  let listClassName = "todolist" + (todoList.length ? "" : " empty");

  return (
    <>
      <Header />
      <div id="container">
        <div className={listClassName}>
          <header>
            <Form 
              todo={todo} 
              setTodo={setTodo} 
              todoList={todoList} 
              commitChange={commitChange}
            />
            <Search 
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
      <Footer />
    </>
  );
}

export default App;
