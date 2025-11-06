function Sidebar() {
  return (
    <aside
      className="d-flex flex-column bg-secondary bg-opacity-10 bg-gradient bg-gradient border-end p-3 vh-100 position-sticky top-0"
      style={{ width: "220px" }}
    >
      {/* Header */}
      <h5 className="mb-4">Sidebar</h5>

      {/* Navigation links */}
      <nav className="flex-grow-1">
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              <i className="bi bi-grid me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              <i className="bi bi-people me-2"></i> Users
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              <i className="bi bi-list-task me-2"></i> Tasks
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              <i className="bi bi-gear me-2"></i> Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer (username/logout) */}
      <div className="mt-auto small text-muted d-flex align-items-center justify-content-between">
        <span className="d-flex align-items-center">
          <i className="bi bi-person-circle me-2"></i> Username
        </span>
        <a href="#" className="text-muted">
          <i className="bi bi-box-arrow-right"></i>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
