import React from "react";
import TypeWriter from "../components/TypeWriter";
import { profile } from "../data";

export default function Hero() {
  function handleScroll(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="page home-page" id="home">
      <div className="home-inner">
        <div className="home-text">
          <p className="wave-text">
            Hi There! <span className="wave">👋</span>
          </p>
          <h1>
            I'm <span className="highlight">{profile.name}</span>
          </h1>
          <h2 className="home-type">
            I'm a <TypeWriter words={profile.roles} />
          </h2>
          <p className="home-desc">
            Full Stack Developer with 3 years of experience across React.js,
            Next.js, React Native, and Node.js — based in {profile.location}.
          </p>

          <div className="home-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleScroll("projects")}
            >
              View Projects
            </button>
            <a
              href="/images/Puneet_Kumar_Resume.pdf"
              download="Puneet_Kumar_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="home-visual">
          <div className="avatar-glow" />
          <div className="hero-photo-circle">
            <img src={profile.heroPhoto} alt={profile.name} />
          </div>

          <div className="home-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href={`mailto:${profile.email}`}>
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
