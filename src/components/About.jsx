import React from "react";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Companies Worked", value: "2" },
  { label: "Core Modules Built", value: "4" },
  { label: "Tech Tools Used", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="bg-dark-surface">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-accent">ABOUT ME</h2>
          <p className="section-subtitle">
            A quick look at who I am and what I do
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="fs-5">
              I'm a Full Stack MERN Developer with 4+ years of experience
              building scalable web applications and RESTful APIs using
              React.js, Node.js, Express.js, JavaScript and MongoDB. I enjoy
              transforming complex business requirements into secure, <br />
              high-performance, and user-friendly applications.
            </p>
            <p className="fs-5">
              My experience includes developing financial compliance platforms,
              KYC/AML workflows, AI-powered document processing, and fraud
              prevention systems. <br /> I've integrated OpenAI to automate
              onboarding, extract data from documents, <br />
              and enhance user productivity with AI-driven features.
            </p>
            <p className="fs-5">
              I have strong expertise in designing RESTful APIs, optimizing
              MongoDB databases, building responsive React applications, and
              following Agile development practices. I'm passionate about
              writing clean, maintainable code, solving real-world problems, and
              continuously learning new technologies to deliver impactful
              software solutions.
            </p>
            <p className="fs-5">
              Outside of coding, I enjoy exploring AI technologies, learning
              about stock market analytics, and staying updated with the latest
              trends in full-stack development. I'm currently open to exciting
              opportunities where I can contribute to innovative products while
              continuing to grow as a software engineer.
            </p>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="row g-3">
              {stats.map((s) => (
                <div className="col-6" key={s.label}>
                  <div className="custom-card text-center">
                    <h3 className="text-accent fw-bold">{s.value}</h3>
                    <p className="mb-0 small">{s.label}</p>
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
