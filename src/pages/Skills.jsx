import React from "react";
import Hero from "../components/Hero";
import video from "../images/waves.mp4";
import "../index.css";

const videoAltText = "white abstract";

const description =
  "Utilizing an eye for detail and cutting-edge design knowledge, I aspire to create compelling visuals that are both visually-pleasing and effective for achieving business objectives. Aiming to leverage my expertise in developing innovative ideas that drive engagement and conversion.";

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

function Skills() {
  return (
    <div>
      <Hero
        className="w-100"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/src/images/Skills.jpg"
      />
      <main id="skills">
        <section className="padding" id="about">
          <video
            className="background"
            autoPlay
            playsInline
            muted
            loop
            src={video}
            alt={videoAltText}
          />
          <div
            style={{
              backgroundColor: "white",
              width: "75%",
              padding: "4rem",
              margin: "3rem auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <h2>Key Skills</h2>
            <p className="large mt-4">{description}</p>
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
      </main>
    </div>
  );
}

// function Skills() {
//   return (
//     <>
//       <Hero
//        className="w-100"
//       backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/Skills.jpg" />

//       <main id="skills">
//         <hr />
//         <h1 className="text-center mb-4">Skills</h1>
//         <div className="container text-center">
//           <div className="list-unstyled row justify-content-evenly">
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-git-square fa-7x"
//                 aria-hidden="true"
//               ></i>
//               <p>Git</p>
//             </div>
//             <div className="col-4">
//               <i className="fa-brands fa-github fa-7x" aria-hidden="true"></i>
//               <p>GitHub</p>
//             </div>
//             <div className="col-4">
//               <i className="fa-brands fa-gitlab fa-7x" aria-hidden="true"></i>
//               <p>GitLab</p>
//             </div>
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-html5 fa-7x text-danger"
//                 aria-hidden="true"
//               ></i>
//               <p>HTML</p>
//             </div>
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-css3-alt fa-7x text-primary"
//                 aria-hidden="true"
//               ></i>
//               <p>CSS</p>
//             </div>
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-bootstrap fa-7x text-info"
//                 aria-hidden="true"
//               ></i>
//               <p>Bootstrap</p>
//             </div>

//             <div className="col-4">
//               <i
//                 className="fa-brands fa-js fa-7x text-warning"
//                 aria-hidden="true"
//               ></i>
//               <p>Javascript</p>
//             </div>
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-node-js fa-7x text-success"
//                 aria-hidden="true"
//               ></i>
//               <p>Node.js</p>
//             </div>
//             <div className="col-4">
//               <i
//                 className="fa-brands fa-react fa-7x text-info"
//                 aria-hidden="true"
//               ></i>
//               <p>React</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

export default Skills;
