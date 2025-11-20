import { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";

function MainContent() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <main className="main-content overflow-auto bg-white">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="bg-white p-3">
              <AddTodoForm onAddTodo={handleAddTodo} />
            </div>

            <div className="bg-white p-3">
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
