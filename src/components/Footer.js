import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href={profile.socials.github} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href={profile.socials.twitter} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href={profile.socials.instagram} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
      <p>
        Made with <i className="fa-solid fa-heart heart" /> by {profile.name}
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
