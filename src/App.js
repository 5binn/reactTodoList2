
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import TodoList from "./page/TodoList";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
