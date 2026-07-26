import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Longshore Labs Private Limited – Chennai",
    duration: "Dec 2022 – present",
    points: [
      "Developed a financial platform for fund and investor onboarding, supporting KYC/AML verification, transaction processing, and regulatory compliance workflows.",
      "Engineered a real-time reporting and statement engine to generate financial statements, transaction histories, and compliance reports for funds, investors, and internal stakeholders.",
      "Developed an AI-powered Smart Onboarding solution using the OpenAI API to automatically extract, verify, and populate contact and business entity information from uploaded documents, reducing manual effort and improving onboarding efficiency",
      "Built an AI Document Assistant that enables users to upload documents and query their contents using natural language through the OpenAI API, streamlining document search and data extraction",
      "Designed and developed secure, scalable RESTful APIs using Node.js, Express.js, and MongoDB to support financial data processing and application integrations",
      "Collaborated in an Agile/Scrum environment, participating in requirement analysis, sprint planning, task estimation, development, testing, and release management to ensure timely delivery of high-quality software",
    ],
  },
  {
    role: "Application Developer",
    company: "IppoPay Technologies Private Limited – Chennai",
    duration: "July 2022 – Sept 2024",
    points: [
      "Developed TUTELAR, a fraud prevention platform designed to detect, prevent, and manage online fraud through AML risk assessment, dispute management, and workflow automation.",
      "Built an AML Risk Assessment module to evaluate individual and business profiles, automate compliance checks, identify fraud risks, and support data-driven decision-making for Anti-Money Laundering (AML) compliance.",
      "Designed and implemented Dispute Management workflows to create, investigate, track, and resolve fraudulent transaction cases, including bulk dispute creation via CSV uploads, improving operational efficiency and regulatory compliance.",
      "Developed a Ticket Management System for issue creation, assignment, workflow automation, status tracking, and seamless collaboration between users, support teams, and cross-functional stakeholders.",
      "Designed and developed scalable frontend and backend features using the MERN Stack (React.js, Node.js, Express.js, MongoDB, JavaScript), following clean architecture, RESTful API design, and Agile development practices.",
    ],
  },
  {
    role: "Associate - InDesign",
    company: "TNQ Technologies Private Limited – Chennai",
    duration: "July 2017 – April 2022",
    points: [
      "Imported and formatted XML content into Adobe InDesign templates to create publication-ready book layouts, ensuring accurate formatting, typography, and page composition for print and digital publishing.",
      "Performed layout modifications, content alignment, image placement, pagination, and formatting corrections while collaborating with the Quality Control (QC) team to resolve production issues and maintain publishing standards.",
      "Generated and validated print-ready and web-ready PDF files, implementing revision requests and delivering high-quality, production-ready outputs within project deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-surface">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-accent">EXPERIENCE</h2>
          <p className="section-subtitle">My professional journey so far</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {experiences.map((exp) => (
                <div className="timeline-item" key={exp.role}>
                  <div className="custom-card">
                    <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                      <h5 className="mb-1">{exp.role}</h5>
                      <span className="badge bg-primary">{exp.duration}</span>
                    </div>
                    <p className="text-accent mb-3">{exp.company}</p>
                    <ul className="mb-0">
                      {exp.points.map((p, idx) => (
                        <li key={idx} className="mb-2">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
