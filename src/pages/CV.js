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

  const projects = [
    {
      name: "E-commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Platform thương mại điện tử với tính năng thanh toán, quản lý kho hàng",
      highlights: ["1000+ users", "99.9% uptime", "Mobile responsive"]
    },
    {
      name: "Task Management App",
      tech: "React, Firebase, Tailwind",
      description: "Ứng dụng quản lý công việc với real-time collaboration",
      highlights: ["Real-time sync", "Team collaboration", "PWA support"]
    },
    {
      name: "Portfolio Website",
      tech: "React, SCSS, Framer Motion",
      description: "Website portfolio cá nhân với animations và interactive elements",
      highlights: ["Modern design", "Smooth animations", "SEO optimized"]
    }
  ];

  const certifications = [
    {
      name: "Frontend Developer Certificate",
      issuer: "F8 - Fullstack.edu.vn",
      date: "2023",
      credentialId: "F8-2023-001"
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-UX-2024"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-JS-2023"
    }
  ];

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

              {/* Projects Section */}
              <section className="cv-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">🛠️</span>
                    Dự án nổi bật
                  </h2>
                </div>
                
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-tech">{project.tech}</p>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-highlights">
                        {project.highlights.map((highlight, idx) => (
                          <span key={idx} className="highlight-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications Section */}
              <section className="cv-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">🏆</span>
                    Chứng chỉ
                  </h2>
                </div>
                
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                      <h3 className="cert-name">{cert.name}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <div className="cert-details">
                        <span className="cert-date">{cert.date}</span>
                        <span className="cert-id">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  ))}
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