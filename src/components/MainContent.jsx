import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";

function MainContent() {
  return (
    <main className="main-content overflow-auto bg-white">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="bg-white p-3">
              <AddTodoForm />
            </div>

            <div className="bg-white p-3">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
