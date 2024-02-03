import React from "react";
import Hero from "../components/Hero";
import "../index.css";

function Skills() {
  return (
    <>
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/Skills.jpg" />
      <main id="skills">
        <hr />
        <h1 className="text-center mb-4">Skills</h1>
        <div className="container text-center">
          <div className="list-unstyled row justify-content-evenly">
            <div className="col-4">
              <i
                className="fa-brands fa-git-square fa-7x"
                aria-hidden="true"
              ></i>
              <p>Git</p>
            </div>
            <div className="col-4">
              <i className="fa-brands fa-github fa-7x" aria-hidden="true"></i>
              <p>GitHub</p>
            </div>
            <div className="col-4">
              <i className="fa-brands fa-gitlab fa-7x" aria-hidden="true"></i>
              <p>GitLab</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-html5 fa-7x text-danger"
                aria-hidden="true"
              ></i>
              <p>HTML</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-css3-alt fa-7x text-primary"
                aria-hidden="true"
              ></i>
              <p>CSS</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-bootstrap fa-7x text-info"
                aria-hidden="true"
              ></i>
              <p>Bootstrap</p>
            </div>

            <div className="col-4">
              <i
                className="fa-brands fa-js fa-7x text-warning"
                aria-hidden="true"
              ></i>
              <p>Javascript</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-node-js fa-7x text-success"
                aria-hidden="true"
              ></i>
              <p>Node.js</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-react fa-7x text-info"
                aria-hidden="true"
              ></i>
              <p>React</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skills;
