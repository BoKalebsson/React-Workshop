import { useState, useRef } from "react";

function AddTodoForm({ onAddTodo }) {
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [attachments, setAttachments] = useState([]);

  function handleSubmit() {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      assignedTo,
      attachments,
      createdAt: new Date().toISOString(),
      completed: false,
    };

    // Send to MainContent:
    onAddTodo(newTodo);

    // Reset the form-fields:
    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignedTo("");
    setAttachments([]);

    // Reset file input:
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className="card bg-light bg-opacity-75 bg-gradient mb-1 rounded-0">
      <div className="card-body">
        <form>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="assignedTo" className="form-label">
                Assign to Person (Optional)
              </label>
              <select
                id="assignedTo"
                className="form-select"
                value={assignedTo}
                onChange={(event) => setAssignedTo(event.target.value)}
              >
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
                ref={fileInputRef}
                onChange={(event) => {
                  const newFiles = Array.from(event.target.files).map(
                    (file) => file.name
                  );

                  setAttachments((prev) => {
                    const combined = [...prev, ...newFiles];
                    return Array.from(new Set(combined));
                  });
                }}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setAttachments([]);
                  fileInputRef.current.value = "";
                }}
              >
                X
              </button>
            </div>

            {/* Static preview of attachments */}
            <div className="border p-2 bg-white" style={{ minHeight: "40px" }}>
              {attachments.length === 0 ? (
                <small className="text-muted">No files selected</small>
              ) : (
                <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                  {attachments.map((file, index) => (
                    <li key={index}>
                      <i className="bi bi-paperclip me-1"></i>
                      {file}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Add Todo Button */}
          <div className="text-end">
            <button
              type="button"
              className="btn btn-secondary opacity-50"
              onClick={handleSubmit}
            >
              + Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
