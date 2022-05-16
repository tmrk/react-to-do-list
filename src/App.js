import './App.css';
import todo from "./data.json";

const FormatDate = function (date) {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2)  day = "0" + day;
  return [year, month, day].join("-");
}

function Header() {
  return (
    <header>
      <h1>React To-Do-List</h1>
    </header>
  );
}

function Item({ item }) {
  const itemClass = isOverdue(item) ? "overdue" : "";
  return (
    <li key={item.id} className={itemClass}>
      <span className="content">{item.name}</span>
      <span className="datedue">By: {FormatDate(new Date(item.timestampDue))}</span>
      <span className="remove">X</span>
    </li>
  );
}

function isOverdue(item) {
  return !item.complete && item.timestampDue < new Date().getTime();
}

function App() {
  return (
    <>
      <Header />
      <div id="container">
        <div className="todolist">
          <ul>
            {todo.Items.map(item => <Item key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
