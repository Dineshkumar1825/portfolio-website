import React, { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  // { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container">
        <div className="portfolio-navbar w-100">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <div className="logo-box">
              <i className="bi bi-code-slash"></i>
            </div>

            <div className="ms-3">
              <h5 className="logo-title mb-0">
                Dinesh<span>Kumar</span>
              </h5>

              <small className="logo-subtitle">Full Stack Developer</small>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navLinks.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className="nav-link"
                    href={`#${item.id}`}
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="ms-lg-4 mt-3 mt-lg-0">
                <a
                  href="Dinesh_Resume.pdf"
                  download="Dinesh_Resume.pdf"
                  className="download-btn"
                >
                  Download CV
                  <i className="bi bi-download ms-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
