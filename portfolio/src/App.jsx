import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectGallery from './pages/Project Gallery';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
    return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/project gallery" element={<Project Gallery/>} />
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
