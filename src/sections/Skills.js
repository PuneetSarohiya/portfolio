import React from "react";
import { skills } from "../data";

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="skill-icons">
        {items.map((skill) => (
          <div className="skill-icon" key={skill.name} title={skill.name}>
            <i className={skill.icon} style={{ color: skill.color }} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="page skills-page" id="skills">
      <h2 className="page-title">
        Professional <span className="highlight">Skillset</span>
      </h2>

      <div className="skills-wrap">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frontend & Mobile" items={skills.frontendMobile} />
        <SkillGroup title="Backend & Databases" items={skills.backend} />
        <SkillGroup title="Cloud & Tools" items={skills.cloudTools} />
      </div>
    </section>
  );
}
