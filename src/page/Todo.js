import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";


function Todo() {

    const {id} = useParams();
    
    const[todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data));
    }, []);

    
    
      const onCheck = () => {
        const checkTodo = {...todo, completed: !todo.completed};
        setTodo(checkTodo);
      }

  

    return (
    <div>
        <Nav />  
        <li>
        <input type="checkbox" checked={todo?.completed} onChange={onCheck}></input>
        <span>{todo?.todo}</span>
        <button>삭제</button>
        </li>
    </div>
    );
}

export default Todo;