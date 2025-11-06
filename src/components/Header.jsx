function Header() {
  return (
    <header className="bg-white p-3 mb-3 position-relative fixed-top">
      <div className="container-fluid px-4 position-relative">
        <h1 className="h4 mb-0">Tasks</h1>

        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ width: "300px", top: "0" }}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search tasks..."
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="mt-4"
          style={{
            height: "2px",
            backgroundColor: "#000",
            opacity: 0.6,
            width: "100%",
          }}
        ></div>
      </div>
    </header>
  );
}
export default Header;
