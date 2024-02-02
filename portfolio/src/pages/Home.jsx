import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profileImage from "../images/womens face- profile.jpg";
import "../index.css";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/Main.Page.jpg">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">About Me</h1>
            <hr />
            <div className="container clearfix">
              <img className="col-4 col-sm-3 col-md-2 float-start mb-3" src={profileImage} alt="profile" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
          <p className="text-align-right">
              I am a front-end developer student based in London who is
              currently transforming ideas into pixels with motive. I love
              creating web-wide wonders, designs you will fall for and cherish.
              Where imagination meets creativity and creativity meets code. I
              design dreams, one click at a time, and create enjoyable digital
              interactions and experiences that click and stick! I'm quietly
              confident, naturally curious, and perpetually working on improving
              my chops one design problem at a time.
            </p>
            <br />
            <p>
              I started my coding journey with the idea to make web designs that
              capture users and turn my imagination into virtual reality. I've
              always been drawn to both the creative and analytical side of
              development. I'm a creative problem solver with a passion for
              design and technology and always looking for opportunities. I
              enjoy learning new things ad looking forward to work with others
              to create something amazing.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
      );
    };


export default Home;

