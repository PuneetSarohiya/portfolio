import React from "react";
import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import WhatsAppFloat from "./sections/WhatsAppFloat";

export default function App() {
  return (
    <div className="app-shell">
      <ParticleBackground />
      <Navbar />
      <main className="app-main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
     