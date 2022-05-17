import FormatDate from "./FormatDate";

export default function ListItem({item, completeItem, removeItem}) {

  let itemClass = "";
  //if (isOverdue(item)) itemClass += "overdue ";
  if (item.complete) itemClass += "completed ";

  return (
    <li key={item.id} className={itemClass}>
      <span className="content">{item.name}</span>
      <span className="datedue">By: {FormatDate(new Date(item.timestampDue))}</span>
      {!item.complete && (
        <span className="complete" title="Complete" onClick={completeItem}>✓</span>
      )}
      <span className="remove" title="Remove" onClick={removeItem}>✕</span>
    </li>
  );
}