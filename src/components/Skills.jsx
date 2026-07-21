import React from "react";

const skillGroups = [
  {
    title: "Languages",
    icon: "bi-code-slash",
    items: ["JavaScript", "Node.js", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: "bi-layers",
    items: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "React Hooks",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend",
    icon: "bi-layers",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Databases",
    icon: "bi-database",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Aggregation Pipeline",
      "Query Optimization",
    ],
  },

  {
    title: "DevOps & Tools",
    icon: "bi-tools",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "Postman",
      "Visual Studio Code",
      "Jenkins",
      "SonarQube",
      "ESLint",
      "Jira",
      "Azure DevOps",
      "Grafana",
      "Kong API Gateway",
    ],
  },
  {
    title: "Development Practices",
    icon: "bi-tools",
    items: [
      "Agile & Scrum",
      "Clean Code",
      "Version Control",
      "Debugging",
      "Performance Optimization",
      "Requirement Analysis",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
  {
    title: "AI & Automation",
    icon: "bi-database",
    items: ["OpenAI API", "Claude AI", "Google Gemini"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-accent">SKILLS</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-6" key={group.title}>
              <div className="custom-card">
                <h5 className="mb-3">
                  <i className={`bi ${group.icon} text-accent me-2`}></i>
                  {group.title}
                </h5>
                <div>
                  {group.items.map((item) => (
                    <span className="skill-badge" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
