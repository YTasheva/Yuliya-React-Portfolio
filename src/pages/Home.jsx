import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profileImage from "../images/womens face- profile.jpg";
import video from "../images/snakesChain.mp4";
import "../index.css";

const videoAltText = "snakes";

const description =
  "London-based frontend developer blending UI craft, UX thinking, and motion to ship fast, inclusive experiences.";

const skillsList = [
  "Website design",
  "UX/UI experience",
  "Inclusive design",
  "Front-end development",
  "Mobile user interfaces",
  "Graphic design",
  "Motion graphics and visual effects",
  "Graphics and media optimization",
  "HTML5/CSS3, Bootstrap, JavaScript",
  "React, jQuery, JSON, ES6",
  "The DOM, AJAX, APIs, Node.js",
  "Tools: VS Code, CLI Terminal",
  "Git, GitHub, GitLab, NPM",
  "Adobe After Effects, Adobe Illustrator",
  "Adobe InDesign, Photoshop",
];

const Quote =
  "Learning new technologies and keeping abreast of markets developments. Adaptable and able to pick up new techniques. Creating websites that are user-friendly, effective and appealing. ";

function Home() {
  useEffect(() => {
    const jq = window.jQuery || window.$;
    if (!jq) return;

    jq(".about-card").css({ opacity: 0, translate: "0 12px" }).animate(
      { opacity: 1, translate: "0 0" },
      420
    );
    jq(".competency-card").css({ opacity: 0, translate: "0 12px" }).animate(
      { opacity: 1, translate: "0 0" },
      450
    );
  }, []);

  return (
    <div className="home-page">
      <Hero
        className="w-100"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/src/images/Main.Page.jpg"
      />
      <section className="about-section">
        <Container>
          <Row>
            <Col size="md-12">
              <div className="about-card">
                <div className="about-media">
                  <img
                    className="about-avatar"
                    src={profileImage}
                    alt="Portrait of Yuliya"
                    loading="lazy"
                  />
                </div>
                <div className="about-copy">
                  <p className="eyebrow">Hello, I&apos;m Yuliya</p>
                  <h1>Designing digital experiences that resonate</h1>
                  <p>
                    I transform ideas into polished interfaces—mixing design systems,
                    accessibility, and motion to create experiences that click and stick.
                    Curious by nature, I iterate fast and collaborate closely with product
                    teams to ship meaningful work. I care about clarity, micro-details, and
                    keeping performance snappy so every interaction feels effortless.
                    Outside of design and code, I draw inspiration from illustration and
                    motion studies to keep my work expressive and human.
                  </p>
                  <div className="about-tags">
                    <span>UI/UX</span>
                    <span>Frontend</span>
                    <span>Motion</span>
                    <span>Accessibility</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding competency-section" id="about">
        <video
          className="background"
          autoPlay
          playsInline
          muted
          loop
          src={video}
          alt={videoAltText}
        />
        <div className="competency-card">
          <p className="eyebrow text-center">Strengths</p>
          <h2 className="text-center">Key Competencies</h2>
          <p className="large mt-3 text-center">{description}</p>
          <div className="skills-columns">
            {skillsList.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
          <p className="quote">{Quote}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
