import React, { useEffect } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import projects from "../projects.json";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

// import { Link } from "react-router-dom";
// import image1 from "../images/02-portfolio-1.jpg";
// import image2 from "../images/Cat-with-the-cream 2.jpg";
// import image3 from "../images/Crow-woman 4.jpg";
// import image4 from "../images/dolls-strings-art.jpg";
//  import image5 from "../images/leopard-crow.jpg";
// import image6 from "../images/zebraMood.jpg";

function Projects() {
  useEffect(() => {
    const jq = window.jQuery || window.$;
    if (!jq) return;

    jq(".project-card").css({ opacity: 0, marginTop: "16px" }).each(function (index) {
      jq(this)
        .delay(120 * index)
        .animate({ opacity: 1, marginTop: "0px" }, 420);
    });
  }, []);

  return (
    <div className="projects-page">
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/src/images/projects.jpg" />
      <main id="projects" className="projects-wrapper">
        <Container>
          <div className="projects-header text-center">
            <h1>Projects</h1>
            <p className="projects-lead">
              A curated mix of web builds, illustrations, and interactive experiments.
              Each tile opens a deeper dive with links to source and live previews.
            </p>
          </div>
          <Row className="g-4 project-grid">
            {projects.map((item, idx) => (
              <Col md="6" lg="4" key={`${item.id}-${idx}`}>
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Projects;
