import ListItem from "./ListItem";

function List({todos, onDelete, onCheck}) {
    return (
      
      <div>
        <ul>
          {todos.map((todo) => <ListItem todo={todo} onDelete={onDelete} onCheck={onCheck}/>)}
        </ul>
      </div>
    );
  }
  
  export default List;