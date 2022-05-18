import FormatDate from "./FormatDate";

export default function ListItem({item, completeItem, removeItem}) {

  let itemClass = "";
  const isOverdue = (item) => {
    const today = FormatDate(new Date()); // this way we just check the days, not milliseconds
    const dateToCheck = FormatDate(item.timestampDue);
    return dateToCheck < today;
  }

  if (isOverdue(item)) itemClass += "overdue ";
  if (item.complete) itemClass += "completed ";
  if (item.hidden) itemClass += "hidden ";

  return (
    <li key={item.id} className={itemClass}>
      <span className="content">{item.name}</span>
      {item.timestampDue && (
        <span className="datedue">
          By: {FormatDate(new Date(item.timestampDue))}
        </span>
      )}
      {!item.complete && (
        <span className="complete" title="Complete" onClick={completeItem}>✓</span>
      )}
      <span className="remove" title="Remove" onClick={removeItem}>✕</span>
    </li>
  );
}