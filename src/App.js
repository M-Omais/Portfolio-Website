import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="https://m-omais.github.io/Portfolio-Website/" element={<Home />} />
        <Route path="https://m-omais.github.io/Portfolio-Website/about" element={<About />} />
        <Route path="https://m-omais.github.io/Portfolio-Website/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
