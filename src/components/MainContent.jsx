import { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";

function MainContent() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos((prev) => [...prev, newTodo]);
  }

  function handleToggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: todo.completed ? null : new Date().toISOString(),
            }
          : todo
      )
    );
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
              <TodoList
                todos={todos}
                onToggleCompleted={handleToggleCompleted}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
