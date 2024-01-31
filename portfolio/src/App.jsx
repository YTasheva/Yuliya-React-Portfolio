import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProjectGallery from "./pages/ProjectGallery";
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import "./App.css";


function App() {
  return (
    <Router>
    <div>
      <NavBar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/projectGallery" element={<ProjectGallery/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    );
}

export default App