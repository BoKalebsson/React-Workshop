import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

function AddTodoForm({ onAddTodo }) {
  const fileInputRef = useRef(null);
  const [attachments, setAttachments] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate || null,
      assignedTo: formData.assignedTo || "",
      attachments,
      createdAt: new Date().toISOString(),
      completed: false,
      completedAt: null,
    };

    // Send to MainContent:
    onAddTodo(newTodo);

    // Reset React Hoof Form:
    reset();

    // Reset attachments:
    setAttachments([]);

    // Reset file input:
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className="card bg-light bg-opacity-75 bg-gradient mb-1 rounded-0">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>

            <input
              id="title"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("title", { required: "Title is required" })}
            />

            {errors.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>

            <textarea
              id="description"
              rows="3"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>

            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}
          </div>

          {/* Due Date & Assigned To */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                id="dueDate"
                type="datetime-local"
                className="form-control"
                {...register("dueDate")}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="assignedTo" className="form-label">
                Assign to Person (Optional)
              </label>
              <select
                id="assignedTo"
                className="form-select"
                {...register("assignedTo")}
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
            <button type="submit" className="btn btn-secondary opacity-50">
              + Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
