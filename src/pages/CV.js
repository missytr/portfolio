import React, { useState } from "react";
import "../styles/CV.css";

function CV() {
  const [viewMode, setViewMode] = useState('interactive');

  const skills = {
    technical: [
      { name: "JavaScript/ES6+", level: 90 },
      { name: "React.js/Next.js", level: 85 },
      { name: "HTML5/CSS3/SCSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Node.js/Express", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "MongoDB/MySQL", level: 75 },
      { name: "UI/UX Design", level: 82 }
    ],
    soft: [
      "Giao tiếp hiệu quả",
      "Làm việc nhóm",
      "Giải quyết vấn đề",
      "Quản lý thời gian",
      "Tư duy sáng tạo",
      "Học hỏi nhanh"
    ]
  };



  return (
    <div className="cv-page">
      {/* Header */}
      <header className="cv-header">
        <div className="header-content">
          <div className="header-info">
            <h1 className="cv-main-title">
              <span className="title-icon">📄</span>
              Curriculum Vitae
            </h1>
            <p className="cv-subtitle">
              Hồ sơ năng lực & Kinh nghiệm chuyên môn
            </p>
          </div>

          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'interactive' ? 'active' : ''}`}
              onClick={() => setViewMode('interactive')}
            >
              <span className="btn-icon">✨</span>
              Interactive
            </button>
            <button
              className={`view-btn ${viewMode === 'pdf' ? 'active' : ''}`}
              onClick={() => setViewMode('pdf')}
            >
              <span className="btn-icon">📑</span>
              PDF View
            </button>
            <a
              href={process.env.PUBLIC_URL + "/CV.pdf"}
              download="TranKhanhLinh_CV.pdf"
              className="download-btn"
            >
              <span className="btn-icon">⬇️</span>
              Tải về
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="cv-main">
        {viewMode === 'interactive' ? (
          <div className="cv-interactive">
            <div className="cv-container">



              {/* Skills Section */}
              <section className="cv-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">🚀</span>
                    Kỹ năng
                  </h2>
                </div>

                <div className="skills-grid">
                  <div className="skills-category">
                    <h3 className="category-title">Technical Skills</h3>
                    <div className="technical-skills">
                      {skills.technical.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percent">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-fill"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-category">
                    <h3 className="category-title">Soft Skills</h3>
                    <div className="soft-skills">
                      {skills.soft.map((skill, index) => (
                        <span key={index} className="soft-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        ) : (
          <div className="cv-pdf-view">
            <div className="pdf-container">
              <iframe
                src={process.env.PUBLIC_URL + "/CV.pdf"}
                width="100%"
                height="900px"
                className="pdf-frame"
                title="CV PDF"
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CV;