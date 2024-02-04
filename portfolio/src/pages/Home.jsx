import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profileImage from "../images/womens face- profile.jpg";
import image from "../images/whiteAbstract.jpg";
import "../index.css";

const imageAltText = "white abstract";

const description =
 "An energetic and imaginative young web developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards. Having a high awareness of industry issues and trends, particularly regarding accessibility, usability, and emerging technologies.";

const skillsList = [
 "Website design",
 "UX/UI experience",
"Inclusive design",
 "Front-end development",
"Mobile user interfaces",
"Graphic design",
"Motion graphics and visual effects",
"HTML/CSS, Bootstrap, JavaScript, React, jQuery, JSON, ES6, APIs, The DOM"
];

const Quote =
 "Learning new technologies and keeping abreast of markets developments. Adaptable and able to pick up new techniques. Creating websites that are user-friendly, effective and appealing. "; 

function Home() {
  
  return (
    <div>
      <Hero
        className="w-100 "
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/Main.Page.jpg" />
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-11">
            <hr />
            <h1 className="text-center mb-4">About Me</h1>
            <div className="container clearfix">
              <img
                className="col-4 col-sm-3 col-md-2 float-start mb-3 mt-2 me-3"
                src={profileImage}
                alt="profile image"
              />
              <p>
                I am a front-end developer student based in London who is
                currently transforming ideas into pixels with motive. "I love
                creating web-wide wonders, designs you will fall for and
                cherish. Where imagination meets creativity and creativity meets
                code. I design dreams, one click at a time, and create enjoyable
                digital interactions and experiences that click and stick! I'm
                quietly confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time".
              </p>
              <br />
              <p>
                I started my coding journey with the idea to make web designs
                that capture users and turn my imagination into virtual reality.
                I've always been drawn to both the creative and analytical side
                of development. I'm a creative problem solver with a passion for
                design and technology and always looking for opportunities. I
                enjoy learning new things ad looking forward to work with others
                to create something amazing.
              </p>
            </div>
            </Col>
            </Row>
            <hr />
            <section className="padding" id="about">
       <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Key Competencies</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
          >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{Quote}</p>
      </div>
      </section>
      </Container>
    </div>
  );
};

export default Home;





