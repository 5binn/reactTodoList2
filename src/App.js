
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import TodoList from "./page/TodoList";
import Todo from "./page/Todo";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
