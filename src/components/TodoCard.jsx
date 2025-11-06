function TodoCard() {
  return (
    <div className="card m-2 p-2 bg-light bg-opacity-75 bg-gradient">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-1">
            <b>Example Todo</b>
          </h6>
          <small className="text-muted d-block">Description goes here</small>
        </div>

        <div className="d-flex align-items-start gap-2">
          <small className="text-muted">Created: 2025-07-01</small>
          <div className="btn-group">
            <button className="btn btn-outline-success btn-sm">
              <i className="bi bi-check-lg"></i>
            </button>
            <button className="btn btn-outline-primary btn-sm">
              <i className="bi bi-pencil"></i>
            </button>
            <button className="btn btn-outline-danger btn-sm">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 d-flex gap-2 align-items-center flex-wrap">
        <small className="text-muted">
          <i className="bi bi-calendar"></i> Due: 2025-07-10
        </small>
        <div className="badge bg-info">
          <i className="bi bi-person"></i> John Doe
        </div>
        <div className="badge bg-secondary">
          <i className="bi bi-paperclip"></i> 2 attachments
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
