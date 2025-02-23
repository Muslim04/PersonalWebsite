import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./pages/Overview";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Books from "./pages/Books";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
