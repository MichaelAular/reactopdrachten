import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Opdracht2 from "./pages/Opdracht2";
import Opdracht3 from "./pages/Opdracht3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="opdracht2" element={<Opdracht2 />} />
        <Route path="opdracht3" element={<Opdracht3 />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>React Opdrachten</h2>
      </main>
      <nav>
        <Link to="/opdracht2">Opdracht 1 & 2</Link><br></br>
        <Link to="/opdracht3">Opdracht 3</Link>
      </nav>
    </>
  );
}

export default App;
