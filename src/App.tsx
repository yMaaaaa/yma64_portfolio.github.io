import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Projects, Contact, Personal } from "./exports";

function App() {
  return (
    <Router basename="/yma64_portfolio.github.io">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
