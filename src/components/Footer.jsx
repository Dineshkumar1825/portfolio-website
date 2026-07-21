import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="mb-3">
          <a href="mailto:dineshkumar18251@gmail.com" className="social-icon">
            <i className="bi bi-envelope-fill"></i>
          </a>
          {/* <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon">
            <i className="bi bi-github"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/dk18251"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Dineshkumar Purushothaman. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
