import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import image1 from "../images/WaveShore.GIF";
import image2 from "../images/Crow-woman 4.jpg";
import image3 from "../images/Cat-with-the-cream 2.jpg";
import image4 from "../images/zebraMood.jpg";
import image5 from "../images/dolls-strings-art.jpg";
import image6 from "../leopard-crow.jpg";

function ProjectGallery() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/projects.jpg">
    </Hero>
      <main id="project" className="container-fluid">
        <h1 className="text-center">Projects Gallery</h1>
        <hr />
        <Container style={{ marginTop: 30 }}>
          <Row>
            {project.map((project) => (
              <Col size="md-4">
                <Card
                  key={project.id}
                  project={project}
                />
              </Col>
            ))}

          </Row>
        </Container>
      </main>
    </div>
  );
}

export default ProjectGallery;
