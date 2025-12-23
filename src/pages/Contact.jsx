import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const CONTACT_API =
    import.meta.env.VITE_CONTACT_API || "/api/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaAnswer: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 8) + 2; // 2-9
    const b = Math.floor(Math.random() * 7) + 3; // 3-9
    return { a, b };
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
    const jq = window.jQuery || window.$;
    if (!jq) return;

    jq(".contact-card").css({ opacity: 0, marginTop: "12px" }).animate(
      { opacity: 1, marginTop: "0px" },
      500
    );

    jq(".contact-form .form-control").each(function (index) {
      jq(this)
        .css({ opacity: 0, marginLeft: "8px" })
        .delay(100 * (index + 1))
        .animate({ opacity: 1, marginLeft: "0px" }, 350);
    });
  }, []);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: "", message: "" });
  };

  const handleRegenerateCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const parsedCaptcha = parseInt(formData.captchaAnswer, 10);

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      return;
    }

    if (Number.isNaN(parsedCaptcha) || parsedCaptcha !== captcha.a + captcha.b) {
      setStatus({
        type: "error",
        message: "Captcha answer is incorrect. Please try again.",
      });
      handleRegenerateCaptcha();
      return;
    }

    setStatus({ type: "pending", message: "Sending your message..." });

    fetch(CONTACT_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || "Failed to send. Please try again.");
        }
        setStatus({
          type: "success",
          message: "Message sent! I’ll get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "", captchaAnswer: "" });
        handleRegenerateCaptcha();
      })
      .catch((err) => {
        setStatus({
          type: "error",
          message:
            err.message ||
            "Could not send right now. Please try again later.",
        });
      });
  };

  return (
    <>
      <Hero
        className="w-10"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/src/images/contactMe.png"
      />
      <section className="contact-wrapper">
        <Container className="contact-card">
          <Row>
            <Col md="6" className="mb-4 mb-md-0">
              <h2 className="contact-title">Let&apos;s connect</h2>
              <p className="contact-subtitle">
                Tell me about your project or idea. I typically respond within
                one business day.
              </p>
              <div className="contact-meta">
                <div>
                  <i className="bi bi-envelope-at"></i>
                  <span>ytashevagit@gmail.com</span>
                </div>
                <div>
                  <i className="bi bi-linkedin"></i>
                  <a
                    href="https://uk.linkedin.com/in/yuliya-stella-tasheva"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </Col>
            <Col md="6">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="Name" className="form-label fw-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  placeholder="What should I call you, superstar?"
                  value={formData.name}
                  onChange={handleOnChange}
                />

                <label htmlFor="Email" className="form-label fw-bold mt-3">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleOnChange}
                />
                <div className="form-text">
                  I&apos;ll use this to reply directly to you.
                </div>

                <label htmlFor="Message" className="form-label fw-bold mt-3">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="Message"
                  rows="4"
                  name="message"
                  placeholder="Drop your wild ideas, hopes, and timelines here."
                  value={formData.message}
                  onChange={handleOnChange}
                ></textarea>

                <div className="captcha-group mt-3">
                  <label htmlFor="Captcha" className="form-label fw-bold">
                    Captcha
                  </label>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="captcha-badge">
                      {captcha.a} + {captcha.b} =
                    </span>
                    <input
                      type="number"
                      className="form-control captcha-input"
                      id="Captcha"
                      name="captchaAnswer"
                      placeholder="Your answer"
                      value={formData.captchaAnswer}
                      onChange={handleOnChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm captcha-refresh"
                      onClick={handleRegenerateCaptcha}
                    >
                      ↻
                    </button>
                  </div>
                  <div className="form-text">
                    Quick check to keep spam at bay.
                  </div>
                </div>

                {status.message && (
                  <div
                    className={`alert mt-3 ${
                      status.type === "error"
                        ? "alert-danger"
                        : "alert-success"
                    }`}
                    role="alert"
                  >
                    {status.message}
                  </div>
                )}

                <button type="submit" className="btn btn-dark contact-submit mt-4">
                  <i className="bi bi-send m-1" aria-hidden="true"></i>
                  Send message
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
