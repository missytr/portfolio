import React, { useState } from "react";
import "../styles/CV.css";

function CV() {
  const [viewMode, setViewMode] = useState('interactive');

  const personalInfo = {
    name: "Trần Khánh Linh",
    title: "Frontend Developer",
    email: "khanhlinh@example.com",
    phone: "+84 123 456 789",
    location: "TP. Hồ Chí Minh, Việt Nam",
    website: "khanhlinh.dev",
    linkedin: "linkedin.com/in/khanhlinh",
    github: "github.com/khanhlinh"
  };

  const education = [
    {
      degree: "Cử nhân Công nghệ Phần mềm",
      school: "Đại học Công nghệ TP.HCM (HUTECH)",
      period: "2021 - 2025",
      gpa: "4.9/5.0",
      achievements: [
        "Học bổng xuất sắc 3 năm liên tiếp",
        "Top 5% sinh viên khoa CNTT",
        "Giải nhất cuộc thi lập trình web HUTECH 2024"
      ]
    }
  ];

  const experience = [
    {
      position: "Frontend Developer Intern",
      company: "TechStart Vietnam",
      period: "06/2024 - 12/2024",
      location: "TP.HCM",
      responsibilities: [
        "Phát triển giao diện web responsive với React.js và Tailwind CSS",
        "Tối ưu hóa performance website, cải thiện loading time 40%",
        "Collaborate với team design để implement UI/UX designs",
        "Code review và maintain codebase với Git workflow"
      ]
    },
    {
      position: "Freelance Web Developer",
      company: "Tự do",
      period: "01/2023 - Hiện tại",
      location: "Remote",
      responsibilities: [
        "Thiết kế và phát triển 15+ website cho các doanh nghiệp nhỏ",
        "Xây dựng landing pages với conversion rate cao",
        "Tư vấn giải pháp công nghệ cho khách hàng",
        "Quản lý dự án từ concept đến deployment"
      ]
    }
  ];

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
              
              {/* Personal Info Section */}
              <section className="cv-section personal-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">👤</span>
                    Thông tin cá nhân
                  </h2>
                </div>
                
                <div className="personal-card">
                  <div className="personal-avatar">
                    <div className="avatar-placeholder">KL</div>
                    <div className="status-badge">Available</div>
                  </div>
                  
                  <div className="personal-details">
                    <h3 className="personal-name">{personalInfo.name}</h3>
                    <p className="personal-title">{personalInfo.title}</p>
                    
                    <div className="contact-grid">
                      <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <span>{personalInfo.email}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">📱</span>
                        <span>{personalInfo.phone}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">🌐</span>
                        <span>{personalInfo.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section className="cv-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">🎓</span>
                    Học vấn
                  </h2>
                </div>
                
                <div className="education-list">
                  {education.map((edu, index) => (
                    <div key={index} className="education-card">
                      <div className="edu-header">
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <span className="edu-period">{edu.period}</span>
                      </div>
                      <p className="edu-school">{edu.school}</p>
                      <p className="edu-gpa">GPA: <strong>{edu.gpa}</strong></p>
                      
                      <div className="achievements">
                        <h4>Thành tích:</h4>
                        <ul>
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience Section */}
              <section className="cv-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">💼</span>
                    Kinh nghiệm làm việc
                  </h2>
                </div>
                
                <div className="experience-timeline">
                  {experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                      <div className="timeline-marker"></div>
                      <div className="exp-content">
                        <div className="exp-header">
                          <h3 className="exp-position">{exp.position}</h3>
                          <span className="exp-period">{exp.period}</span>
                        </div>
                        <p className="exp-company">{exp.company} • {exp.location}</p>
                        
                        <div className="responsibilities">
                          <h4>Trách nhiệm:</h4>
                          <ul>
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

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