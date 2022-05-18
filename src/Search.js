const Search = ({todo, setTodo, todoList, setTodoList}) => {

  const handleChange = (event) => {
    let searchTerm = event.target.value;    
    const updatedTodoList = todoList.map(
      item => ({ ...item, hidden: !item.name.toLowerCase().includes(searchTerm.toLowerCase()) })
    );
    setTodoList(updatedTodoList); // this doesn't need to be committed to localStorage
  }

  return (
    <div className="search">
      <input id="search" 
        placeholder="Search..." onChange={handleChange} 
        autoComplete="off" spellCheck="false" 
      />
      <div>Hooray, nothing to do!</div>
    </div>
  );

}

export default Search;