import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Longshore Labs Private Limited – Chennai",
    duration: "Dec 2022 – Aug 2026",
    points: [
      "Developed a fintech platform for fund and investor onboarding with end-to-end onboarding workflows covering CDD/KYC, PEP, sanctions, risk assessment scoring, regulatory screening, approval processes, and investment transaction processing using React.js, Node.js, Express.js, and MongoDB",
      "Built a real-time financial reporting engine supporting complex reports for share buy/sell transactions, investor statements, transaction history, billing, invoices, and financial statements",
      "Built an AI-powered document processing solution using OpenAI API to automatically extract person/individual and entity/business information from uploaded documents, reducing manual data entry",
      "Implemented an AI-powered document Q&A solution using RAG, embeddings, vector search, and LLMs, enabling users to query uploaded documents using natural language and retrieve relevant information",
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
      "Developed risk assessment workflows with PEP, sanctions, adverse media, and fraud-risk checks before onboarding, along with ongoing monitoring (OGM) for continuous risk assessment",
      "Built manual and bulk dispute creation using complex CSV uploads with validation, parsing, and data processing; implemented BullMQ and Cron Jobs for background processing and automated merchant reminders",
      "Developed a ticketing system for ticket assignment, prioritization, tracking, status management, and workflow handling, with customizable ticket categories, priorities, and user access controls",
      "Developed Web3 wallet functionality for sending and receiving tokens through third-party APIs; secured web and mobile APIs using Kong Gateway and JWT",
      "Developed a template management system enabling users to create, customize, configure, and manage reusable templates based on different business requirements",
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
