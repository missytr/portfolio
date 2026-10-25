import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/CV.css";

function CV() {
  const { language, t } = useLanguage();
  const { cv: cvLocale, about: aboutLocale, projects: projectsLocale } = t;
  const [viewMode, setViewMode] = useState('interactive');

  const contacts = {
    phone: "(+84) 907 253 408",
    email: "trankhanhlinh.lt@gmail.com",
    location: aboutLocale.profile.location,
    portfolio: "https://missytr.github.io/portfolio/",
    github: "https://github.com/missytr"
  };

  const candidateName = language === 'en' ? "Tran Khanh Linh" : "Trần Khánh Linh";

  // Selected personal projects from projectsLocale
  const personalProjects = projectsLocale.items.slice(3);

  // Technical skills flat list
  const technicalSkills = [
    "ReactJS", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Node.js",
    "SQL Server", "PostgreSQL", "C#", "Java", "Flutter", "Git & GitHub", "RESTful API", "WordPress"
  ];

  return (
    <div className="cv-page-container">
      {/* Header Bar */}
      <section className="cv-header-bar">
        <div className="cv-header-titles">
          <span className="section-kicker">{cvLocale.kicker}</span>
          <h1 className="cv-heading">{cvLocale.heading}</h1>
          <p className="cv-lead">{cvLocale.lead}</p>
        </div>

        <div className="cv-action-controls">
          <button
            className={`cv-mode-btn ${viewMode === 'interactive' ? 'active' : ''}`}
            onClick={() => setViewMode('interactive')}
          >
            {cvLocale.modeInteractive}
          </button>
          <button
            className={`cv-mode-btn ${viewMode === 'pdf' ? 'active' : ''}`}
            onClick={() => setViewMode('pdf')}
          >
            {cvLocale.modePdf}
          </button>
          <a
            href={process.env.PUBLIC_URL + "/CV.pdf"}
            download="TranKhanhLinh_CV.pdf"
            className="cv-download-btn"
          >
            {cvLocale.downloadPdf}
          </a>
        </div>
      </section>

      {/* Main View */}
      <section className="cv-content-area">
        {viewMode === 'interactive' ? (
          <div className="cv-document-sheet">
            {/* Header of Resume */}
            <header className="resume-sheet-header">
              <div>
                <h2 className="resume-name">{candidateName}</h2>
                <div className="resume-title">{aboutLocale.profile.role}</div>
              </div>
              <div className="resume-contact-block">
                <div>Email: {contacts.email}</div>
                <div>{language === 'en' ? 'Phone:' : 'Điện thoại:'} {contacts.phone}</div>
                <div>{language === 'en' ? 'Location:' : 'Địa điểm:'} {contacts.location}</div>
                <div>GitHub: {contacts.github}</div>
              </div>
            </header>

            {/* Summary */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.summary}</h3>
              <p className="resume-body-text">{cvLocale.summaryText}</p>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.education}</h3>
              <div className="resume-entry">
                <div className="entry-row">
                  <strong className="entry-title">{cvLocale.educationDetails.school}</strong>
                  <span className="entry-time">{cvLocale.educationDetails.period}</span>
                </div>
                <div className="entry-sub">
                  <span>{language === 'en' ? 'Major:' : 'Chuyên ngành:'} {cvLocale.educationDetails.major}</span>
                  <span>•</span>
                  <span>{language === 'en' ? 'Cumulative GPA:' : 'Điểm tích lũy GPA:'} <strong>{cvLocale.educationDetails.gpa}</strong></span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.experience}</h3>
              <div className="resume-entries-stack">
                {aboutLocale.workExperience.map((exp, idx) => (
                  <div key={idx} className="resume-entry">
                    <div className="entry-row">
                      <strong className="entry-title">{exp.project}</strong>
                      <span className="entry-time">{exp.period}</span>
                    </div>
                    <div className="entry-sub">
                      <span>{exp.company}</span>
                      <span>—</span>
                      <span className="entry-role-tag">{exp.role} ({exp.status})</span>
                    </div>
                    <ul className="entry-bullet-list">
                      {exp.highlights.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.projects}</h3>
              <div className="resume-projects-grid">
                {personalProjects.map((p, idx) => (
                  <div key={idx} className="resume-proj-box">
                    <div className="entry-row">
                      <strong className="entry-title">{p.title}</strong>
                      <span className="entry-time">{p.year}</span>
                    </div>
                    <div className="entry-role-tag">{p.role}</div>
                    <p className="entry-desc-paragraph">{p.desc}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="entry-link">
                        Demo: {p.link} →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.skills}</h3>
              <div className="resume-skills-block">
                <div>
                  <span className="skills-group-title">{cvLocale.skillsLabels.technical}</span>
                  <div className="resume-skill-pills">
                    {technicalSkills.map((skill, index) => (
                      <span key={index} className="resume-skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <span className="skills-group-title">{cvLocale.skillsLabels.soft}</span>
                  <div className="resume-skill-pills">
                    {aboutLocale.softSkills.map((skill, index) => (
                      <span key={index} className="resume-skill-item item-soft">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <h3 className="resume-section-heading">{cvLocale.sections.certifications}</h3>
              <div className="resume-certs-stack">
                {aboutLocale.achievements.map((c, idx) => (
                  <div key={idx} className="cert-row">
                    <div className="entry-row">
                      <strong className="entry-title">{c.title}</strong>
                      <span className="entry-time">{c.period}</span>
                    </div>
                    <div className="cert-org">{c.issuer}</div>
                    <p className="entry-desc-paragraph">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="cv-pdf-frame-card">
            <div className="pdf-mobile-fallback">
              <p>{cvLocale.mobileFallbackNotice}</p>
              <a
                href={process.env.PUBLIC_URL + "/CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-pdf"
              >
                {cvLocale.openPdfFullscreen}
              </a>
            </div>
            <iframe
              src={process.env.PUBLIC_URL + "/CV.pdf"}
              width="100%"
              height="940px"
              className="pdf-iframe-clean"
              title="Tran Khanh Linh Resume PDF"
            ></iframe>
          </div>
        )}
      </section>
    </div>
  );
}

export default CV;