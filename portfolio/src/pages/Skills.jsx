import React from "react";

function Skills() {
  return (
    <>
      <main id="skills">
        <h1 className="text-center">Skills</h1>
        <hr />
        <div className="container text-center">
          <div className="list-unstyled row justify-content-evenly">
            <div className="col-4">
              <i
                className="fab fa-git-square fa-7x"
                aria-hidden="true"
              ></i>
              <p>Git</p>
            </div>
            <div className="col-4">
              <i className="fab fa-github fa-7x" aria-hidden="true"></i>
              <p>GitHub</p>
            </div>
            <div className="col-4">
              <i className="fab fa-gitlab fa-7x" aria-hidden="true"></i>
              <p>GitLab</p>
            </div>
            <div className="col-4">
              <i
                className="fab fa-html5 fa-7x text-danger"
                aria-hidden="true"
              ></i>
              <p>HTML</p>
            </div>
            <div className="col-4">
              <i
                className="fab fa-css3-alt fa-7x text-primary"
                aria-hidden="true"
              ></i>
              <p>CSS</p>
            </div>
            <div className="col-4">
              <i
                className="fab fa-bootstrap fa-7x text-info"
                aria-hidden="true"
              ></i>
              <p>Bootstrap</p>
            </div>

            <div className="col-4">
              <i
                className="fab fa-js fa-7x text-warning"
                aria-hidden="true"
              ></i>
              <p>Javascript</p>
            </div>
            <div className="col-4">
              <i
                className="fab fa-node-js fa-7x text-success"
                aria-hidden="true"
              ></i>
              <p>Node.js</p>
            </div>
            <div className="col-4">
              <i
                className="fab fa-react fa-7x text-info"
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
