import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Layout from "./Layout";


function Todo() {

    const params = useParams();
    
    const[todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${params.id}`)
        .then(res => res.json())
        .then(data => setTodo(data));
    }, []);

    const onCheck = () => {
        const checkTodo = {...todo, completed: !todo.completed};
        setTodo(checkTodo);
    };

    return (
    <div>
        <Layout> 
        <li>
        <input type="checkbox" checked={todo.completed} onChange={onCheck}></input>
        <span>ID: {todo.id} / </span>
        <span>{todo.todo}</span>
        <div>
        <button>삭제</button>
        </div>
        
        </li>
        </Layout>
    </div>
    );
}

export default Todo;