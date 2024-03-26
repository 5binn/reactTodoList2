
import Head from "./components/Head";
import List from "./components/List";
import CreateTodo from "./components/CreateTodo";
import { useEffect, useRef, useState } from "react";


function TodoList() {
    const[todos, setTodos] = useState([]);
    useEffect(() => {
      fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.todos));
    }, [])
  
    const nextId = useRef(todos.length != 0 ? todos[todos.length - 1].id : 0);
  
    const onCreate = (e) => {
      e.preventDefault();
      if(e.target.text.value != '') {
        setTodos([...todos, {id: nextId.current, todo: e.target.text.value, completed: false}]);
        nextId.current++;
      }
      e.target.text.value = '';
    }; 
  
    const onDelete = (id) => {
      const deleteTodos = todos.filter(todo => todo.id != id);
      console.log(deleteTodos);
      setTodos(deleteTodos);
    };
  
    const onCheck = (id) => {
      const checkTodo = todos.map((todo)=> todo.id == id ? {...todo, completed: !todo.completed} : todo);
      setTodos(checkTodo);
    }
  
    const count = todos.filter(todo => !todo.completed).length;
  

    return (
        <div>
        <Head count={count}/>
        <CreateTodo onCreate={onCreate}/>
        <List todos={todos} onDelete={onDelete} onCheck={onCheck}/>
        </div>
    );
}

export default TodoList;