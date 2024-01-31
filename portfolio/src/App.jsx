import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectGallery from "./pages/ProjectGallery";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ProjectGallery" element={<ProjectGallery />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
