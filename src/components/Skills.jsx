import React from "react";

const skillGroups = [
  {
    title: "Languages",
    icon: "bi-code-slash",
    items: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend",
    icon: "bi-window",
    items: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "React Hooks",
      "Bootstrap",
      "Responsive Web Design",
      "Axios",
    ],
  },
  {
    title: "Backend",
    icon: "bi-server",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices Architecture",
      "JWT Authentication",
      "OAuth",
      "WebSockets",
      "File Upload (Multer)",
      "Authentication & Authorization",
      "Middleware Development",
      "API Integration",
    ],
  },
  {
    title: "Database",
    icon: "bi-database",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Aggregation Pipeline",
      "Query Optimization",
      "Database Design",
      "Schema Design",
      "Indexing",
      "Redis (Caching)",
    ],
  },
  {
    title: "AI & LLM",
    icon: "bi-robot",
    items: [
      "OpenAI API",
      "Claude API",
      "Google Gemini API",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Vector Search",
      "Vector Databases (Pinecone/FAISS)",
      "Vector Indexes",
      "Embeddings",
      "Semantic Search",
      "LLM Workflows",
      "AI Document Processing",
      "AI-Powered Data Extraction",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "bi-cloud",
    items: [
      "Docker",
      "Jenkins",
      "Azure DevOps",
      "CI/CD Pipelines",
      "AWS (EC2, S3 - Basic)",
      "Kong API Gateway",
      "Grafana",
      "SonarQube",
    ],
  },
  {
    title: "Tools",
    icon: "bi-tools",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "VS Code",
      "npm",
      "Postman",
      "Jira",
      "Adobe InDesign",
    ],
  },
  {
    title: "Testing & Quality",
    icon: "bi-check2-square",
    items: [
      "Unit Testing",
      "ESLint",
      "Debugging",
      "Code Review",
      "Performance Optimization",
      "Error Handling",
      "Logging",
    ],
  },
  {
    title: "Methodologies",
    icon: "bi-kanban",
    items: [
      "Agile",
      "Scrum",
      "Software Development Life Cycle (SDLC)",
      "Clean Code Practices",
    ],
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
