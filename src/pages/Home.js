import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import avatarImg from "../img/image.jpg";
import "../styles/Home.css";

function Home() {
  const { t } = useLanguage();
  const { home } = t;

  const coreSkills = [
    "ReactJS", "TypeScript", "JavaScript", "Node.js", "SQL Server",
    "Oracle API Center", "Zalo Mini App", "RESTful API", "HTML5/CSS3", "Git"
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left Text */}
          <div className="hero-intro">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>{home.statusBadge}</span>
            </div>

            <h1 className="hero-heading">
              {home.name}
            </h1>

            <p className="hero-subheading">
              {home.subheading}
            </p>

            <p className="hero-bio">
              {home.bio}
            </p>

            <div className="hero-cta-group">
              <Link to="/projects" className="btn-primary">
                {home.btnProjects}
              </Link>
              <Link to="/about" className="btn-outline">
                {home.btnAbout}
              </Link>
            </div>

            <div className="hero-skills-strip">
              <span className="skills-strip-label">{home.skillsLabel}</span>
              <div className="skills-pill-row">
                {coreSkills.map((skill, index) => (
                  <span key={index} className="skill-badge-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Portrait */}
          <div className="hero-portrait-col">
            <div className="portrait-frame">
              <img src={avatarImg} alt={home.name} className="portrait-image" />
              <div className="portrait-caption">
                <span className="caption-name">{home.name}</span>
                <span className="caption-title">{home.portraitCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="metrics-section">
        <div className="metrics-grid">
          {home.metrics.map((item, index) => (
            <div key={index} className="metric-box">
              <span className="metric-number">{item.value}</span>
              <span className="metric-title">{item.label}</span>
              <span className="metric-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="featured-section">
        <div className="section-header">
          <div>
            <span className="section-kicker">{home.capabilitiesKicker}</span>
            <h2 className="section-title">{home.capabilitiesTitle}</h2>
            <p className="section-subtitle">{home.capabilitiesSubtitle}</p>
          </div>
          <Link to="/projects" className="section-link">
            {home.capabilitiesLink}
          </Link>
        </div>

        <div className="capabilities-grid">
          {home.capabilities.map((item, index) => (
            <div key={index} className="capability-card">
              <div className="capability-top-meta">
                <span className="capability-step">{item.step}</span>
                <span className="capability-role">{item.role}</span>
              </div>
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.desc}</p>
              <div className="capability-highlights">
                <span className="highlights-label">{item.highlightsLabel}</span>
                <ul className="capability-bullets">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;