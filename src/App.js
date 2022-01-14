import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar"
import Home from "./pages/Home";
import Opdracht2 from "./pages/Opdracht2";
import Opdracht3 from "./pages/Opdracht3";

function App() {
  return (
  <div className="App">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/opdracht2" element={<Opdracht2 />} />
    <Route path="/opdracht3" element={<Opdracht3 />} />
  </Routes>;
  <NavBar />
  </div>
  )
}

export default App;
