function AddTodoForm() {
  return (
    <div className="card bg-light bg-opacity-75 bg-gradient mb-1 rounded-0">
      <div className="card-body">
        <form>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" id="title" className="form-control" />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          {/* Due Date & Assigned To */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="assignedTo" className="form-label">
                Assign to Person (Optional)
              </label>
              <select id="assignedTo" className="form-select">
                <option value="">-- Select Person --</option>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Charlie">Charlie</option>
              </select>
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-3">
            <label htmlFor="attachments" className="form-label">
              Attachments
            </label>
            <div className="input-group mb-2">
              <input
                type="file"
                id="attachments"
                className="form-control"
                multiple
              />
              <button type="button" className="btn btn-outline-secondary">
                X
              </button>
            </div>

            {/* Static preview of attachments */}
            <div className="border p-2 bg-white" style={{ minHeight: "40px" }}>
              <small className="text-muted">No files selected</small>
              {/* Here we will add the code to preview files later */}
            </div>
          </div>

          {/* Add Todo Button */}
          <div className="text-end">
            <button type="button" className="btn btn-secondary opacity-50">
              + Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
