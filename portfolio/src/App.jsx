import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectGallery from "./pages/ProjectGallery";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <Router>
      <div>
        <Navbar2 />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectGallery />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
