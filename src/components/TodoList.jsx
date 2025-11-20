import TodoCard from "./TodoCard";

function TodoList({ todos }) {
  return (
    <div className="card shadow-sm rounded-0">
      <div className="card-header bg-secondary bg-opacity-25 bg-gradient d-flex justify-content-between align-items-center rounded-0">
        <h5 className="mb-0">Todos</h5>
        <div className="btn-group">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-filter"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-sort-down"></i>
          </button>
        </div>
      </div>

      <div className="p-2">
        {todos.length === 0 ? (
          <p className="text-muted">No todos yet.</p>
        ) : (
          todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default TodoList;
