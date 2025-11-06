import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column vh-100 overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
