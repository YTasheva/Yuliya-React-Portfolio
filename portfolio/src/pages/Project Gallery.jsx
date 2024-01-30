import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import projects from "../projects.json";

function ProjectsGallery() {
  return (
    <div>
        <main id="projectsGallery" class name="container-fluid">
        <h1 className="text-center">Projects Gallery</h1>
        <hr />
      <Container style={{ marginTop: 30 }}>
        <Row>
          {projects.map(project => (
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

export default ProjectsGallery;