import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Project from "../pages/Project";
import projects from "../projects.json";
import { Container, Row, Col } from "react-bootstrap";

function ProjectGallery() {
  return (
    <div>
      <Hero backgroundImage="../images/ContactPage.jpg">
      <h1>Contact</h1>
    </Hero>
      <main id="projects" className="container-fluid">
        <h1 className="text-center">Projects Gallery</h1>
        <hr />
        <Container style={{ marginTop: 30 }}>
          <Row>
            {projects.map((project) => (
              <Col size="md-4">
                <Card
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  github={project.github}
                  deployed={project.deployed}
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
