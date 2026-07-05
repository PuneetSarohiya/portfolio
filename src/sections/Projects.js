import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="page project-page" id="projects">
      <h2 className="page-title">
        My Recent <span className="highlight">Works</span>
      </h2>
      <p className="page-subtitle">
        Real products shipped in production — click through to visit them.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <i className={project.icon} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-up-right-from-square" />{" "}
                    {project.linkLabel}
                  </a>
                ) : (
                  <span className="project-internal">
                    <i className="fa-solid fa-lock" /> {project.linkLabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
