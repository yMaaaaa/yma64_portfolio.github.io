import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  const [] = useState(0);

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Card />
      </div>
    </>
  );
}

export default App;
