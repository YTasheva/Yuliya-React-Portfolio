import React from "react";
import Hero from "../components/Hero";
import { Container } from "react-bootstrap";

function Contact(props) {
  return (
    <>
<Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/contactMe.png" />
<Container style={{ minHeight: '50%' }}>
    <main id="contact">
      <h1 className="text-center mt-3">Get In Touch</h1>
      <form className="w-80 m-auto mt-5">
        <div className="mb-5">
          <label htmlFor="InputName" className="form-label">
          <i className="bi bi-person-bounding-box m-2" aria-hidden="true"></i>
            Your Name
          </label>
          <input
            type="text"
            className="form-control bg-light"
            id="InputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
          <i className="bi bi-envelope-at-fill m-2" aria-hidden="true"></i>
            Your Email
          </label>
          <input
            type="email"
            className="form-control bg-light"
            id="InputEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text m-4">
          I would truly like to hear what you think about the content and website or share what is on your mind.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="TextFormControl" className="form-label">
          <i className="bi bi-chat-quote-fill m-2" aria-hidden="true"></i>
            Your Message
          </label>
          <textarea
            className="form-control bg-light"
            id="TextFormControl"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-danger mb-2">
        <i className="bi bi-send m-1" aria-hidden="true"></i>
          Send
        </button>
      </form>
    </main>
    </Container>
    </>
  );
}

export default Contact;