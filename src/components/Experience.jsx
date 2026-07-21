import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Longshore Labs Private Limited – Chennai",
    duration: "Dec 2022 – present",
    points: [
      "A financial platform handling funds, investor onboarding, KYC/AML workflows, and transaction processing",
      "Built reporting and statement engines to generate real-time financial statements, transaction histories, and compliance reports for clients and investors",
      "Built AI onboarding features using OpenAI to automate contact and business entity verification",
      "Created an AI document tool allowing users to upload files and query contents via OpenAI",
      "Designed secure REST APIs using Node.js, Express.js, and MongoDB for scalable data processing",
      "Managed Agile sprint cycles, including requirement gathering, task assignment and release documentation",
    ],
  },
  {
    role: "Application Developer",
    company: "IppoPay Technologies Private Limited – Chennai",
    duration: "July 2022 – Sept 2024",
    points: [
      "Worked on Tutelar, a fraud prevention platform designed to detect, prevent, and manage online fraud risks through automated workflows and risk assessment solutions",
      "Developed and enhanced AML risk assessment modules to analyze individual and business profiles, evaluate risk factors, and support data-driven decision-making",
      "Implemented Dispute Management workflows enabling users to raise, track, and manage fraudulent transaction disputes with status updates and resolution processes",
      "Built and maintained a Ticketing Management System for issue creation, assignment, tracking, and streamlined communication between users and support teams",
      "Developed scalable frontend and backend features using MERN stack technologies (React.js, Node.js, Express.js, MongoDB, JavaScript) following clean coding practices and Agile methodologies",
    ],
  },
  {
    role: "Associate - InDesign",
    company: "TNQ Technologies Private Limited – Chennai",
    duration: "July 2017 – April 2022",
    points: [
      "Skilled in creating and fixing book layouts using Adobe InDesign, delivering publication-ready files for both print and digital formats",
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
