import React, { useState } from "react";
import { profile, contact } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to a form service (Formspree, EmailJS, etc.) or your own API.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="page contact-page" id="contact">
      <h2 className="page-title">
        Get In <span className="highlight">Touch</span>
      </h2>
      <p className="page-subtitle">{contact.body}</p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {sent && (
            <p className="form-success">Thanks! I'll get back to you soon.</p>
          )}
        </form>

        <div className="contact-info">
          <p>
            <i className="fa-solid fa-envelope" /> {profile.email}
          </p>
          <p>
            <i className="fa-solid fa-phone" />{" "}
            <a
              href={`tel:${profile.phone}`}
              style={{
                color: "#b7bcd6",
                textDecoration: "none",
              }}
            >
              {profile.phone}
            </a>
          </p>
          <p>
            <i className="fa-solid fa-location-dot" /> {profile.location}
          </p>
          <div className="contact-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
