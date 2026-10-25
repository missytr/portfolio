import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

function Projects() {
  const { t } = useLanguage();
  const { projects: projectsLocale } = t;
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = projectsLocale.items;

  const categories = [
    { id: 'all', name: projectsLocale.categories.all, count: projects.length },
    { id: 'enterprise', name: projectsLocale.categories.enterprise, count: projects.filter(p => p.categories.includes('enterprise')).length },
    { id: 'frontend', name: projectsLocale.categories.frontend, count: projects.filter(p => p.categories.includes('frontend')).length },
    { id: 'mobile', name: projectsLocale.categories.mobile, count: projects.filter(p => p.categories.includes('mobile')).length },
    { id: 'fullstack', name: projectsLocale.categories.fullstack, count: projects.filter(p => p.categories.includes('fullstack')).length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="projects-container">
      {/* Header */}
      <section className="projects-header-section">
        <span className="section-kicker">{projectsLocale.kicker}</span>
        <h1 className="projects-main-heading">{projectsLocale.heading}</h1>
        <p className="projects-lead">
          {projectsLocale.lead}
        </p>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <span>{cat.name}</span>
              <span className="filter-count-badge">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="projects-grid-body">
        <div className="projects-cards-list">
          {filteredProjects.map((p) => (
            <div key={p.id} className="project-detail-card">
              <div className="project-top-header">
                <span className="project-company-name">{p.company}</span>
                <span className={`project-status-pill ${p.status.toLowerCase().includes('live') ? 'status-live' : 'status-general'}`}>
                  {p.status}
                </span>
              </div>

              <h2 className="project-main-title">{p.title}</h2>
              <div className="project-meta-info">
                <span className="project-meta-role">{p.role}</span>
                <span className="project-meta-separator">•</span>
                <span className="project-meta-year">{p.year}</span>
              </div>

              <p className="project-description-text">{p.desc}</p>

              <div className="project-highlights-box">
                <span className="highlights-caption">{projectsLocale.keyFeaturesLabel}</span>
                <ul className="highlights-unordered-list">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags-footer">
                <div className="project-tech-pills">
                  {p.tech.map((tItem, i) => (
                    <span key={i} className="tech-badge-clean">{tItem}</span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-anchor"
                  >
                    {projectsLocale.viewDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;