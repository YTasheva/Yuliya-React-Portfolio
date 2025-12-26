import React, { useEffect } from "react";
import Hero from "../components/Hero";
import video from "../images/waves.mp4";
import "../index.css";

const description =
  "Full-stack creative focused on interfaces that feel sharp, inclusive, and fast. I blend design systems, frontend engineering, and motion to ship polished products.";

const pillars = [
  {
    title: "Product & UX",
    items: ["UX/UI strategy", "Inclusive design", "Design systems", "Journey mapping"],
    icon: "bi-bezier",
  },
  {
    title: "Frontend Craft",
    items: ["React + Vite", "JavaScript/ES6", "Responsive UI", "Accessibility (a11y)"],
    icon: "bi-code-slash",
  },
  {
    title: "Motion & Visuals",
    items: ["Micro-interactions", "Prototyping", "After Effects", "Illustration"],
    icon: "bi-magic",
  },
  {
    title: "Platforms & Data",
    items: ["REST APIs/AJAX", "Node.js", "Integrations", "Performance tuning"],
    icon: "bi-diagram-3",
  },
  {
    title: "Tools",
    items: ["VS Code / CLI", "Git/GitHub/GitLab", "NPM", "Figma/Adobe CC"],
    icon: "bi-tools",
  },
  {
    title: "Quality",
    items: ["Testing mind-set", "Optimization", "Documentation", "Continuous learning"],
    icon: "bi-graph-up",
  },
];

function Skills() {
  useEffect(() => {
    const jq = window.jQuery || window.$;
    if (!jq) return;

    jq(".skills-header").css({ opacity: 0, marginTop: "12px" }).animate(
      { opacity: 1, marginTop: "0px" },
      400
    );

    jq(".skill-card").css({ opacity: 0, translate: "0 12px" }).each(function (index) {
      jq(this)
        .delay(120 * index)
        .animate({ opacity: 1, translate: "0 0" }, 420);
    });
  }, []);

  return (
    <div className="skills-page">
      <Hero
        className="w-100"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/src/images/Skills.jpg"
      />
      <main id="skills">
        <section className="skills-wrapper">
          <div className="skills-video">
            <video
              className="background"
              autoPlay
              playsInline
              muted
              loop
              src={video}
              aria-hidden="true"
            />
          </div>
          <div className="skills-content">
            <div className="skills-header">
              <p className="eyebrow">Capabilities</p>
              <h2>Skills to Design & Ship</h2>
              <p className="skills-lead">{description}</p>
            </div>
            <div className="skills-grid">
              {pillars.map((pillar) => (
                <article className="skill-card" key={pillar.title}>
                  <div className="skill-card__icon">
                    <i className={`bi ${pillar.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="skill-card__body">
                    <h3>{pillar.title}</h3>
                    <ul>
                      {pillar.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
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
