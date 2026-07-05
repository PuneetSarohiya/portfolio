import React from "react";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section className="page experience-page" id="experience">
      <h2 className="page-title">
        Work <span className="highlight">Experience</span>
      </h2>

      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.title + job.place}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{job.year}</span>
              <h3>{job.title}</h3>
              <span className="timeline-place">{job.place}</span>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2 className="page-title small-top">
        <span className="highlight">Education</span>
      </h2>

      <div className="timeline">
        {education.map((edu) => (
          <div className="timeline-item" key={edu.title}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{edu.year}</span>
              <h3>{edu.title}</h3>
              <span className="timeline-place">{edu.place}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
