import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import avatarImg from "../img/image.jpg";
import certNetworking from "../img/networking-basics.png";
import certJS1 from "../img/javascript-essentials-1.png";
import "../styles/About.css";

function About() {
  const { language, t } = useLanguage();
  const { about: aboutLocale } = t;
  const [activeTab, setActiveTab] = useState('overview');

  // Map certificate images to achievement items
  const achievements = aboutLocale.achievements.map((ach) => {
    if (ach.title.toLowerCase().includes("networking")) {
      return { ...ach, image: certNetworking };
    }
    if (ach.title.toLowerCase().includes("javascript")) {
      return { ...ach, image: certJS1 };
    }
    return ach;
  });

  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-header-section">
        <span className="section-kicker">{aboutLocale.kicker}</span>
        <h1 className="about-main-heading">{aboutLocale.heading}</h1>
        <p className="about-lead">
          {aboutLocale.lead}
        </p>

        {/* Tab Controls */}
        <div className="tab-navigation">
          <button
            className={`tab-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            {aboutLocale.tabs.overview}
          </button>
          <button
            className={`tab-item ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {aboutLocale.tabs.experience}
          </button>
          <button
            className={`tab-item ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {aboutLocale.tabs.skills}
          </button>
          <button
            className={`tab-item ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            {aboutLocale.tabs.achievements}
          </button>
        </div>
      </section>

      {/* Main Tab Panels */}
      <section className="about-content-body">
        {/* TAB 1: OVERVIEW & EDUCATION */}
        {activeTab === 'overview' && (
          <div className="tab-panel">
            <div className="overview-two-col">
              {/* Profile Card */}
              <div className="profile-bio-box">
                <div className="bio-top">
                  <img src={avatarImg} alt={language === 'en' ? 'Tran Khanh Linh' : 'Trần Khánh Linh'} className="bio-photo" />
                  <div>
                    <h2 className="bio-fullname">{language === 'en' ? 'Tran Khanh Linh' : 'Trần Khánh Linh'}</h2>
                    <span className="bio-designation">{aboutLocale.profile.role}</span>
                    <span className="bio-location-text">{aboutLocale.profile.location}</span>
                  </div>
                </div>

                <div className="bio-paragraphs">
                  <p>{aboutLocale.profile.bio1}</p>
                  <p>{aboutLocale.profile.bio2}</p>
                </div>

                <div className="personal-interests">
                  <span className="interests-label">{aboutLocale.profile.interestsLabel}</span>
                  <div className="interests-pills">
                    {aboutLocale.profile.interests.map((interest, i) => (
                      <span key={i} className="interest-pill">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="education-box">
                <div className="box-header-title">{aboutLocale.education.header}</div>
                <h3 className="school-title">{aboutLocale.education.school}</h3>
                <div className="school-field">{aboutLocale.education.field}</div>
                <div className="school-period">{aboutLocale.education.period}</div>

                <div className="gpa-display-panel">
                  <span className="gpa-large-num">{aboutLocale.education.gpaNum}</span>
                  <span className="gpa-field-label">{aboutLocale.education.gpaLabel}</span>
                </div>

                <div className="timeline-block">
                  <div className="timeline-title-label">{aboutLocale.education.timelineHeading}</div>
                  <div className="timeline-list">
                    {aboutLocale.education.timeline.map((item, idx) => (
                      <div key={idx} className="timeline-row">
                        <div className="timeline-bullet"></div>
                        <div className="timeline-detail">
                          <span className="timeline-time">{item.period}</span>
                          <strong className="timeline-heading">{item.title}</strong>
                          <p className="timeline-paragraph">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="tab-panel">
            <div className="experience-stack">
              {aboutLocale.workExperience.map((item, idx) => (
                <div key={idx} className="work-card">
                  <div className="work-card-head">
                    <div>
                      <span className="work-company">{item.company}</span>
                      <h3 className="work-project">{item.project}</h3>
                      <span className="work-role-pill">{item.role}</span>
                    </div>
                    <div className="work-meta-right">
                      <span className="work-status-badge">{item.status}</span>
                      <span className="work-period">{item.period}</span>
                    </div>
                  </div>
                  <ul className="work-bullets">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SKILLS */}
        {activeTab === 'skills' && (
          <div className="tab-panel">
            <div className="skills-grid-clean">
              {aboutLocale.skillsCategories.map((cat, idx) => (
                <div key={idx} className="skill-category-card">
                  <h3 className="category-card-heading">{cat.category}</h3>
                  <div className="category-pills">
                    {cat.items.map((skill, i) => (
                      <span key={i} className="skill-tag-clean">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="skill-category-card full-width">
                <h3 className="category-card-heading">{aboutLocale.softSkillsTitle}</h3>
                <div className="soft-skills-list">
                  {aboutLocale.softSkills.map((ss, i) => (
                    <div key={i} className="soft-skill-row">
                      <span className="soft-skill-bullet">—</span>
                      <span className="soft-skill-text">{ss}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ACHIEVEMENTS */}
        {activeTab === 'achievements' && (
          <div className="tab-panel">
            <div className="achievements-card-grid">
              {achievements.map((ach, idx) => (
                <div key={idx} className="achievement-box">
                  <span className="ach-type-tag">{ach.type}</span>
                  {ach.image && (
                    <div className="ach-img-container">
                      <img src={ach.image} alt={ach.title} className="ach-thumbnail" />
                    </div>
                  )}
                  <h3 className="ach-card-title">{ach.title}</h3>
                  <div className="ach-issuer">{ach.issuer} • {ach.period}</div>
                  <p className="ach-card-desc">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default About;