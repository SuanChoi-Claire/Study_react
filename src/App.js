//import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import BoardList from "./components/BoardList";
import BoardDetail from "./pages/BoardDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
