import React, { useEffect } from "react";

const Footer = () => {
  const today = new Date();

  useEffect(() => {
    const jq = window.jQuery || window.$;
    if (!jq) return;

    jq(".footer").hide().fadeIn(500);
    jq(".footer__cta")
      .css({ opacity: 0, marginTop: "16px" })
      .delay(250)
      .animate({ opacity: 1, marginTop: "0px" }, 500);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <i className="bi bi-feather"></i>
          </div>
          <div>
            <p className="footer__label">Portfolio of</p>
            <p className="footer__name">Yuliya Tasheva</p>
            <p className="footer__tagline">
              Crafting elegant, user-first digital experiences.
            </p>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__section">
            <p className="footer__section-title">Contact</p>
            <a href="tel:+5555555555" className="footer__link">
              <i className="fa fa-phone-square" aria-hidden="true"></i>
              <span>+55 55 555 5555</span>
            </a>
            <a href="mailto:ytashevagit@gmail.com" className="footer__link">
              <i className="fa fa-envelope-square" aria-hidden="true"></i>
              <span>ytashevagit@gmail.com</span>
            </a>
          </div>
          <div className="footer__section">
            <p className="footer__section-title">Connect</p>
            <a
              href="https://github.com/YTasheva/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://uk.linkedin.com/in/yuliya-stella-tasheva"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://docs.google.com/document/d/1zUYNT_KdkO-oKvPNC82Fq5jjMSOH5KhA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <i className="bi bi-filetype-pdf" aria-hidden="true"></i>
              <span>View CV / Resume</span>
            </a>
          </div>
        </div>

        <div className="footer__cta">
          <p>Ready to collaborate on your next project?</p>
          <a className="footer__button" href="mailto:ytashevagit@gmail.com">
            <i className="bi bi-send"></i> Let&apos;s talk
          </a>
        </div>
      </div>
      <div className="footer__meta">
        <span>© {today.getFullYear()} Yuliya Tasheva. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
