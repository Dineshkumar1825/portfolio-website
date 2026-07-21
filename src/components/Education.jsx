import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      school: "A.M. Jain College (University of Madras)",
      location: "Meenambakkam, Chennai - 600061",
      percentage: "79%",
      year: "April 2017",
    },
    {
      degree: "HSC",
      school: "Government Boys Higher Secondary School",
      location: "Chrompet, Chennai - 600044",
      percentage: "73%",
      year: "May 2014",
    },
    {
      degree: "SSLC",
      school: "Government Higher Secondary School",
      location: "Anakaputhur, Chennai - 600070",
      percentage: "83.6%",
      year: "June 2012",
    },
  ];

  return (
    <section id="education" className="bg-dark-surface py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-accent">EDUCATION</h2>
          <p className="section-subtitle">My Academic Journey</p>
        </div>

        <div className="row g-4">
          {education.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="custom-card h-100 p-4">
                <div className="mb-3">
                  <i className="bi bi-mortarboard-fill text-accent fs-2"></i>
                </div>

                <h5 className="fw-bold">{item.degree}</h5>
                <p className="mb-1 fw-semibold">{item.school}</p>
                <p className="small mb-3">{item.location}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary">{item.percentage}</span>
                  <span className="small">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
