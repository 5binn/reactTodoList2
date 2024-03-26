
function ListItem({todo, onDelete, onCheck}) {
    return (
      
      <div>
        <li>
          <input type="checkbox" checked={todo.completed} onChange={() => onCheck(todo.id)}></input>
          <span>{todo.todo}</span>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      </div>
    );
  }
  
  export default ListItem;