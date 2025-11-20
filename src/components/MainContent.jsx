import { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";

function MainContent() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("created");

  // Create a visible Todo-list for the UI based on sort/filter:
  const visibleTodos = todos
    // Filter:
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    })
    // Sort:
    .sort((a, b) => {
      if (sortOrder === "created") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortOrder === "due") {
        // Push Todos witout due date to the end of the list:
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0;
    });

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

  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
                todos={visibleTodos}
                filter={filter}
                sortOrder={sortOrder}
                onChangeFilter={setFilter}
                onChangeSort={setSortOrder}
                onToggleCompleted={handleToggleCompleted}
                onDeleteTodo={handleDeleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
