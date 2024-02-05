import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../projects.json";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  return (
    <Container>
      <Row>
        <Col>
          <main id="project">
            <article className="text-center">
              {project && (
                <div>
                  <h1>{project.id}</h1>
                  <p>{project.description}</p>
                  <div>
                    <a href={project.html_url} target="_blank" rel="noreferrer">
                      <button className="btn bg-dark text-white m-2">
                        <i
                          className="fa-solid fa-link"
                          aria-hidden="true"
                        ></i>
                        GitHub
                      </button>
                    </a>
                    <a
                      href={project.deployed_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn bg-dark text-white m-2">
                        <i
                          className="fa-solid fa-link"
                          aria-hidden="true"
                        ></i>
                        Deployed
                      </button>
                    </a>
                  </div>
                  <img
                    className="img-fluid"
                    src={project.image_url}
                    alt={projects.id}
                  />
                </div>
              )}
              {!project && (
                <div>
                  <Link to="/projects">← Back to Projects</Link>
                </div>
              )}
            </article>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
