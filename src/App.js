import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
