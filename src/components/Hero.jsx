import React from "react";
import programmerImg from "../assets/programmer-night.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 fade-in">
            <p className="text-accent fw-semibold mb-2"> 👋 Hello, I'm</p>
            {/* <h1 className="display-4 fw-bold mb-3">
              Dineshkumar Purushothaman
            </h1> */}
            <h1 className="hero-title">
              Dinesh<span>Kumar</span>
              <br />
              Purushothaman
            </h1>
            <h3 className="hero-role">MERN Stack Developer</h3>
            <p className="hero-description">
              Building scalable, responsive, and high-performance web
              applications using React.js, Node.js, Express.js, MongoDB, and
              JavaScript. Passionate about designing clean, maintainable
              architectures, developing secure RESTful APIs, optimizing
              application performance, and creating seamless user experiences.
              Experienced in Agile development, Git-based collaboration, and
              delivering reliable, production-ready software solutions.
            </p>
            {/* <div className="d-flex flex-wrap gap-5 mb-4">
              <a
                href="/resume.pdf"
                download="Dineshkumar_Purushothaman_Resume.pdf"
                className="btn btn-outline-accent px-4 py-2"
              >
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-accent px-4 py-2">
                <i className="bi bi-envelope me-2"></i>Contact Me
              </a>
            </div> */}
            <div>
              <a
                href="mailto:dineshkumar18251@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              {/* <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a> */}
              <a
                href="https://www.linkedin.com/in/dk18251"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="tel:9087065451"
                className="social-icon"
                aria-label="Phone"
                title="9087065451"
              >
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>
          <img src={programmerImg} alt="Programmer at night" />
        </div>
      </div>
    </section>
  );
}
