import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import projects from "../projects.json";
import { Container, Row } from "react-bootstrap";
import "../index.css";

// import { Link } from "react-router-dom";
// import image1 from "../images/02-portfolio-1.jpg";
// import image2 from "../images/Cat-with-the-cream 2.jpg";
// import image3 from "../images/Crow-woman 4.jpg";
// import image4 from "../images/dolls-strings-art.jpg";
//  import image5 from "../images/leopard-crow.jpg";
// import image6 from "../images/zebraMood.jpg";

function Projects() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/projects.jpg"></Hero>
      <hr />
      <main id="projects">
      <h1 className="text-center mb-4">Project Gallery</h1>
        <Container style={{ marginTop: 30 }}>
          <Row>
            {projects.map((item) => (
                <Card key={item.id} item={item} />
            ))}
          </Row>
        </Container>
        </main>
    </div>
  );
}

export default Projects;
