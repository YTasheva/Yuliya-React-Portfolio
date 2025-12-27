import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../projects.json";

const Project = () => {
  const { pid } = useParams();
  const project = projects.find((item) => item.id === pid);

  useEffect(() => {
    const jq = window.jQuery || window.$;
    if (!jq) return;

    const handleClick = function () {
      const $el = jq(this);
      $el.addClass("btn-pulse");
      setTimeout(() => $el.removeClass("btn-pulse"), 220);
    };

    jq(".project-btn").on("click", handleClick);
    return () => jq(".project-btn").off("click", handleClick);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <main id="project">
            <article className="text-center mt-4">
              {project && (
                <div>
                  <h1>{project.id}</h1>
                  <p className="project-detail-summary">{project.description}</p>
                  <div>
                    <a href={project.html_url} target="_blank" rel="noreferrer">
                      <button className="btn bg-dark text-white m-2 project-btn">
                        <i className="bi bi-github m-2" aria-hidden="true"></i>
                        GitHub
                      </button>
                    </a>
                    <a
                      href={project.deployed_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn bg-dark text-white m-4 project-btn">
                        <i
                          className="bi bi-caret-right-square m-1"
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
