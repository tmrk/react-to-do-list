import FormatDate from './FormatDate';

const Form = ({todo, setTodo, todoList, commitChange}) => {

  const handleChange = (event) => {
    let newItem;
    // If the current todo has no id it means we are adding a new todo
    if (!todo.id) {
      newItem = {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        timestampCreated: new Date().getTime(),
        complete: false
      }
    } else {
      newItem = Object.assign({}, todo);
    }
    switch (event.target.id) {
      case "taskname":
        newItem.name = event.target.value;
        break;
      case "duedate":
        newItem.timestampDue = new Date(event.target.value).getTime();
        break;
      default: break;
    }
    setTodo(newItem);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.name && todo.name.trim().length) {
      commitChange([...todoList, todo]);
      setTodo({name:""});
    } else document.getElementById("taskname").focus(); // this is not React but it will do for now
  }

  return (
    <form onSubmit={handleSubmit}>
    <input id="taskname" value={todo.name} onChange={handleChange} 
      type="text" placeholder="My new task..." 
      autoComplete="off" spellCheck="false" 
    />
    <div className="duedate">
      <label htmlFor="dateDue">Deadline (optional)</label>
      <input id="duedate" type="date" 
        value={todo.timestampDue ? FormatDate(todo.timestampDue) : ""} 
        name="dateDue" onChange={handleChange} />
    </div>
    <button type="submit">Add Task</button>
  </form>
  );
}

export default Form;