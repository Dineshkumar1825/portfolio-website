import React from "react";

const techStack = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "Mongoose",
  "REST APIs",
  "JWT",
  "Kong Gateway",
  "BullMQ",
  "Cron Jobs",
  "CSV Processing",
  "OpenAI API",
  "LangChain",
  "Vector Search",
  "Postman",
  "SonarQube",
  "Unit Testing",
  "Git",
  "GitHub",
];

const modules = [
  {
    title: "Fund & Investor Onboarding Module",
    icon: "bi-person-vcard",
    desc: "Developed a fintech platform for fund and investor onboarding with end-to-end onboarding workflows covering CDD/KYC, PEP, sanctions, risk assessment scoring, regulatory screening, approval processes, and investment transaction processing using React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    title: "Financial Reporting & Billing Module",
    icon: "bi-bar-chart-line",
    desc: "Built a real-time financial reporting engine supporting complex reports for share buy/sell transactions, investor statements, transaction history, billing, invoices, and financial statements.",
  },
  {
    title: "AI Smart Onboarding Module",
    icon: "bi-robot",
    desc: "Built an AI-powered document processing solution using OpenAI API to automatically extract person/individual and entity/business information from uploaded documents, reducing manual data entry.",
  },
  {
    title: "AI Document Intelligence Module",
    icon: "bi-file-earmark-text",
    desc: "Implemented an AI-powered document Q&A solution using RAG, embeddings, vector search, and LLMs, enabling users to query uploaded documents using natural language and retrieve relevant information.",
  },
  {
    title: "AML & OGM Module",
    icon: "bi-shield-lock",
    desc: "Developed risk assessment workflows with PEP, sanctions, adverse media, and fraud-risk checks before onboarding, along with ongoing monitoring (OGM) for continuous risk assessment.",
  },
  {
    title: "Dispute Module",
    icon: "bi-exclamation-octagon",
    desc: "Built manual and bulk dispute creation using complex CSV uploads with validation, parsing, and data processing; implemented BullMQ and Cron Jobs for background processing and automated merchant reminders.",
  },
  {
    title: "Ticketing Module",
    icon: "bi-ticket-perforated",
    desc: "Developed a ticketing system for ticket assignment, prioritization, tracking, status management, and workflow handling, with customizable ticket categories, priorities, and user access controls.",
  },
  {
    title: "Web3 Module",
    icon: "bi-wallet2",
    desc: "Implemented Web3 wallet functionality for sending and receiving tokens through third-party APIs.",
  },
  {
    title: "Dynamic Template Module",
    icon: "bi-file-earmark-code",
    desc: "Developed a template management system enabling users to create, customize, configure, and manage reusable templates based on different business requirements.",
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
