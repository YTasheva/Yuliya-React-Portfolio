import React from "react";


const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer text-center bg-light text-dark container-fluid flex-column pt-3">
      <div className="container-fluid p-3 gap-2 d-grid d-md-flex flex-row flex-wrap justify-content-around">
        <a href="tel:+5555555555" className="btn btn-light">
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          555.555.5555
        </a>
        <a href="mailto:ytasheva@website.com" className="btn btn-light">
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
          ytashevagit@gmail.com
        </a>
        <a
          href="https://github.com/YTasheva/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <i className="fa fa-github-square" aria-hidden="true"></i> GitHub
        </a>
        <a
          href="https://uk.linkedin.com/in/yuliya-stella-tasheva"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
        </a>
        <a
          href="https://docs.google.com/document/d/1zUYNT_KdkO-oKvPNC82Fq5jjMSOH5KhA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light"
        >
          <i className="bi bi-filetype-pdf m-2" aria-hidden="true"></i> CV{" "}
        </a>
      </div>
      <div className="text-center d-block bg-light text-dark container-fluid pt-3">
        <ul>Yuliya Tasheva &copy; {today.getFullYear()}</ul>
      </div>
    </footer>
  );
}

export default Footer;
