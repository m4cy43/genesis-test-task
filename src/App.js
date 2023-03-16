import "./App.css";
import Catalogue from "./pages/Catalogue";
import Header from "./components/Header";
import CoursePage from "./pages/CoursePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/:uuid" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
