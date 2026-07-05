import React, { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleClick(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
        {/* {profile.firstName} */}
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-github"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
