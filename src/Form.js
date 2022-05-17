import { useState } from 'react';

const Form = ({todo, setTodo, todoList, setTodoList}) => {

  const handleChange = (event) => {
    let newItem = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      name: event.target.value,
      timestampCreated: new Date().getTime(),
      timestampDue: new Date().getTime(),
      complete: false
    }
    setTodo(newItem);
    console.log(newItem);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({name:""});
    console.log(todoList);
  }

  return (
    <form onSubmit={handleSubmit}>
    <input value={todo.name} onChange={handleChange} type="text" className="taskname" placeholder="My new task..." />
    <div className="duedate">
      <label htmlFor="dateDue">Deadline (optional)</label>
      <input type="date" name="dateDue" min="2022-05-17" />
    </div>
    <button type="submit">Add Task</button>
  </form>
  );
}

export default Form;