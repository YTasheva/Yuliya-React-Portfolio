import React, { useState } from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";

function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const initialState = { name: "", email: "", message: "" };
  // const [eachEntry, setEachEntry] = useState(initialState);
  // const { name, email, message } = eachEntry;

  const handleOnChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name is ${formData.name}`);
    console.log(`email is ${formData.email}`);
    console.log(`message is ${formData.message}`);

    props.doSomething(formData);
    setFormData(initialState);
  };

  return (
    <>
      <Hero
        className="w-10"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/contactMe.png"
      />
      <hr />
      <div className="text-center mt-3 h4 font-weight-bold">
        <h2>Get In Touch</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <form onSubmit={handleOnChange}>
          <Container className="w-80 m-auto mt-5">
            <Row className="mb-5">
              <Col size="12">
                <label htmlFor="Name" className="form-label">
                  <i
                    className="bi bi-person-bounding-box m-2"
                    aria-hidden="true"
                  ></i>
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="Name"
                  aria-describedby="nameHelp"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col size="12">
                <label htmlFor="Email" className="form-label">
                  <i
                    className="bi bi-envelope-at-fill m-2"
                    aria-hidden="true"
                  ></i>
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control bg-light"
                  id="Email"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text m-4">
                  I would truly like to hear what you think about the content
                  and website or share what is on your mind.
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col size="12">
                <label htmlFor="Message" className="form-label">
                  <i
                    className="bi bi-chat-quote-fill m-2"
                    aria-hidden="true"
                  ></i>
                  Your Message
                </label>
                <textarea
                  className="form-control bg-light"
                  id="Message"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </Col>
            </Row>
            <button type="submit" className="btn btn-outline-danger mb-2">
              <i className="bi bi-send m-1" aria-hidden="true"></i>
              Send
            </button>
          </Container>
          <Container className="mt-4 mb-5">
            <h3>Thank you {name}!</h3>
            <p>Your interest in my site is much appreciated {/*password*/}!</p>
          </Container>
        </form>
      </form>
    </>
  );
}

export default Contact;
