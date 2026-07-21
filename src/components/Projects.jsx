import React from "react";

const techStack = [
  "Html",
  "Css",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB Atlas",
  "Postman",
  "Git/GitHub",
];

const modules = [
  {
    title: "ALPINE MODULE",
    icon: "bi-shield-check",
    desc: "Developed a scalable financial platform for client and investor onboarding, KYC/AML workflows, transaction processing, and reporting. Implemented AI-powered onboarding, document processing, and secure REST APIs using React.js, Node.js, Express.js, MongoDB, and OpenAI.",
  },
  {
    title: "AML MODULE",
    icon: "bi-shield-check",
    desc: "Conducted comprehensive risk assessments for individuals and business entities by analyzing KYC, AML, customer due diligence (CDD), sanctions, PEP, and adverse media data to support regulatory compliance and informed onboarding decisions.",
  },
  {
    title: "DISPUTE MODULE",
    icon: "bi-arrow-left-right",
    desc: "Developed a dispute management module that enables users to report fraudulent transactions, track dispute status in real time, and receive resolution updates throughout the investigation process.",
  },
  {
    title: "TICKETING SYSTEM",
    icon: "bi-ticket-perforated",
    desc: "Built a ticket management solution that allows users to create, assign, prioritize, and monitor tickets, track issue progress, manage workflows, and ensure timely resolution through status updates and notifications.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-accent">PROJECTS</h2>
          <p className="section-subtitle">Featured work I've contributed to</p>
        </div>

        <div className="custom-card mb-4">
          {/* <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
            <h4 className="mb-0">
              <i className="bi bi-shield-lock text-accent me-2"></i>
              Tutelar — Fraud Prevention Product
            </h4>
          </div> */}
          {/* <p className="">
            Tutelar is a fraud prevention solution that enables the detection,
            prevention, and control of online fraud risks.
          </p> */}
          <div className="row g-3 mt-2">
            {modules.map((m) => (
              <div className="col-md-4" key={m.title}>
                <div
                  className="p-3 h-100 border rounded-3"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <i
                    className={`bi ${m.icon} text-accent fs-4 mb-2 d-block`}
                  ></i>
                  <h6 className="text-accent">{m.title}</h6>
                  <p className="small mb-0">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            {techStack.map((t) => (
              <span className="tech-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
