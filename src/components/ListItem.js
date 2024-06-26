import {Link} from "react-router-dom";

function ListItem({todo, onDelete, onCheck}) {
    return (
      
      <div>
        <li>
          <input type="checkbox" checked={todo.completed} onChange={() => onCheck(todo.id)}></input>
          <Link to={`/todos/${todo.id}`}>{todo.todo}</Link>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      </div>
    );
  }
  
  export default ListItem;