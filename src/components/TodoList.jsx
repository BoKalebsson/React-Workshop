import TodoCard from "./TodoCard";

function TodoList({
  todos,
  filter,
  sortOrder,
  onChangeFilter,
  onChangeSort,
  onToggleCompleted,
  onDeleteTodo,
}) {
  return (
    <div className="card shadow-sm rounded-0">
      <div className="card-header bg-secondary bg-opacity-25 bg-gradient d-flex justify-content-between align-items-center rounded-0">
        <h5 className="mb-0">Todos</h5>
        <div className="btn-group">
          {/* Filter Dropdown */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-filter"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => onChangeFilter("all")}
                >
                  Show All {filter === "all" && "✓"}
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => onChangeFilter("completed")}
                >
                  Completed {filter === "completed" && "✓"}
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => onChangeFilter("active")}
                >
                  Active {filter === "active" && "✓"}
                </button>
              </li>
            </ul>
          </div>
          {/* Sort Dropdown */}
          <div className="btn-group ms-2">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-sort-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => onChangeSort("created")}
                >
                  Sort by Created Date {sortOrder === "created" && "✓"}
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => onChangeSort("due")}
                >
                  Sort by Due Date {sortOrder === "due" && "✓"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-2">
        {todos.length === 0 ? (
          <p className="text-muted">No todos yet.</p>
        ) : (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleCompleted={onToggleCompleted}
              onDeleteTodo={onDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
