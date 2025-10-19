import React, { useState, useEffect } from "react";
import "../styles/About.css";
import avatar from "../img/image.png";


function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { 
      name: "React/JavaScript", 
      percent: 90, 
      icon: "⚛️",
      description: "Modern React development với Hooks, Context API"
    },
    { 
      name: "HTML/CSS/SCSS", 
      percent: 95, 
      icon: "🎨",
      description: "Responsive design, CSS Grid, Flexbox, Animations"
    },
    { 
      name: "Node.js/Express", 
      percent: 80, 
      icon: "🚀",
      description: "Backend development, REST APIs, Database integration"
    },
    { 
      name: "UI/UX Design", 
      percent: 85, 
      icon: "✨",
      description: "Figma, Adobe XD, User-centered design"
    },
    { 
      name: "Git/GitHub", 
      percent: 88, 
      icon: "🔧",
      description: "Version control, Collaboration, CI/CD workflows"
    },
    { 
      name: "MongoDB/SQL", 
      percent: 75, 
      icon: "🗃️",
      description: "Database design, Queries, Data modeling"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Học bổng xuất sắc",
      year: "2023-2024",
      description: "Top 5% sinh viên xuất sắc ngành CNPM"
    },
    {
      icon: "💻",
      title: "Hackathon Winner", 
      year: "2024",
      description: "Giải nhất cuộc thi lập trình web HUTECH"
    },
    {
      icon: "📜",
      title: "Frontend Certificate",
      year: "2023",
      description: "F8 - Fullstack JavaScript Certificate"
    },
    {
      icon: "🎯",
      title: "UI/UX Certificate",
      year: "2024", 
      description: "Google UX Design Professional Certificate"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Bắt đầu hành trình",
      description: "Nhập học ngành Công nghệ Phần mềm tại HUTECH"
    },
    {
      year: "2022", 
      title: "Khám phá Frontend",
      description: "Học HTML, CSS, JavaScript và yêu thích thiết kế giao diện"
    },
    {
      year: "2023",
      title: "Chuyên sâu React",
      description: "Master React, Redux, và các công nghệ Frontend hiện đại"
    },
    {
      year: "2024",
      title: "Fullstack Development",
      description: "Mở rộng sang Backend với Node.js và database"
    },
    {
      year: "2025",
      title: "Sẵn sàng cho sự nghiệp",
      description: "Tốt nghiệp và bước vào thế giới công nghệ chuyên nghiệp"
    }
  ];

  const interests = [
    { icon: "🎵", name: "Âm nhạc", desc: "Lo-fi, Jazz, Indie" },
    { icon: "📱", name: "Tech Trends", desc: "AI, Web3, Mobile" },
    { icon: "📸", name: "Photography", desc: "Street, Portrait" },
    { icon: "🌱", name: "Learning", desc: "New frameworks, Languages" },
    { icon: "🎮", name: "Gaming", desc: "Strategy, Indie games" },
    { icon: "☕", name: "Coffee", desc: "Third wave coffee culture" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <img src={avatar} alt="Trần Khánh Linh" />
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Available for work</span>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Xin chào!</span>
              <span className="name">Tôi là <span className="highlight">Khánh Linh</span></span>
              <span className="role">Creative Frontend Developer</span>
            </h1>
            <p className="hero-description">
              Sinh viên năm 4 ngành Công nghệ Phần mềm tại HUTECH với đam mê tạo ra những trải nghiệm web tuyệt vời. 
              Tôi kết hợp kỹ thuật và nghệ thuật để mang lại giải pháp sáng tạo.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="about-nav">
        <div className="nav-container">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>Tổng quan</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span>Kỹ năng</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            <span>Hành trình</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'interests' ? 'active' : ''}`}
            onClick={() => setActiveTab('interests')}
          >
            <span>Sở thích</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="about-main">
        <div className="content-container">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <section className="tab-content overview-content">
              <div className="intro-card">
                <h2 className="section-title">
                  Về tôi
                </h2>
                <div className="intro-text">
                  <p>
                    Là một sinh viên năm 4 đam mê công nghệ, tôi tin rằng <strong>thiết kế tốt</strong> không chỉ là 
                    làm cho mọi thứ trông đẹp mắt, mà còn là tạo ra những trải nghiệm có ý nghĩa và giải quyết được 
                    vấn đề thực tế.
                  </p>
                  <p>
                    Với kinh nghiệm <strong>2+ năm phát triển web</strong>, tôi chuyên tập trung vào việc xây dựng 
                    giao diện người dùng hiện đại, responsive và tối ưu hóa performance. Tôi yêu thích việc học hỏi 
                    công nghệ mới và luôn sẵn sàng đối mặt với những thử thách mới.
                  </p>
                  <blockquote className="quote">
                    <p>"Mã nguồn sạch là ngôn ngữ của sự tôn trọng đối với những lập trình viên khác"</p>
                    <cite>- Uncle Bob</cite>
                  </blockquote>
                </div>
              </div>

              <div className="achievements-section">
                <h3 className="section-subtitle">Thành tích & Chứng chỉ</h3>
                <div className="achievements-grid">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <div className="achievement-content">
                        <h4>{achievement.title}</h4>
                        <span className="achievement-year">{achievement.year}</span>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <section className="tab-content skills-content">
              <h2 className="section-title">
                <span className="title-icon">🚀</span>
                Kỹ năng & Công nghệ
              </h2>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <div>
                          <h4 className="skill-name">{skill.name}</h4>
                          <p className="skill-description">{skill.description}</p>
                        </div>
                      </div>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-bar" 
                        style={{ 
                          width: `${skill.percent}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tech-stack">
                <h3 className="section-subtitle">Tech Stack</h3>
                <div className="tech-categories">
                  <div className="tech-category">
                    <h4>Frontend</h4>
                    <div className="tech-tags">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Next.js</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">Tailwind CSS</span>
                      <span className="tech-tag">SCSS</span>
                      <span className="tech-tag">Framer Motion</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h4>Backend</h4>
                    <div className="tech-tags">
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Express</span>
                      <span className="tech-tag">MongoDB</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">REST API</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h4>Tools</h4>
                    <div className="tech-tags">
                      <span className="tech-tag">Git</span>
                      <span className="tech-tag">Figma</span>
                      <span className="tech-tag">VS Code</span>
                      <span className="tech-tag">Webpack</span>
                      <span className="tech-tag">Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <section className="tab-content journey-content">
              <h2 className="section-title">
                Hành trình của tôi
              </h2>
              
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <span className="timeline-year">{item.year}</span>
                    </div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="philosophy-section">
                <h3 className="section-subtitle">Triết lý làm việc</h3>
                <div className="philosophy-cards">
                  <div className="philosophy-card">
                    <h4>Chất lượng trên số lượng</h4>
                    <p>Tôi tin vào việc tạo ra những sản phẩm có chất lượng cao, được đầu tư kỹ lưỡng hơn là làm nhiều nhưng chưa tốt.</p>
                  </div>
                  <div className="philosophy-card">
                    <h4>Học hỏi không ngừng</h4>
                    <p>Công nghệ phát triển nhanh chóng, tôi luôn cập nhật kiến thức mới và chia sẻ với cộng đồng.</p>
                  </div>
                  <div className="philosophy-card">
                    <h4>Sáng tạo & Đổi mới</h4>
                    <p>Mỗi dự án là cơ hội để thử nghiệm ý tưởng mới và tạo ra những trải nghiệm độc đáo.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Interests Tab */}
          {activeTab === 'interests' && (
            <section className="tab-content interests-content">
              <h2 className="section-title">
                Sở thích & Đam mê
              </h2>
              
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-card">
                    <span className="interest-icon">{interest.icon}</span>
                    <h4 className="interest-name">{interest.name}</h4>
                    <p className="interest-desc">{interest.desc}</p>
                  </div>
                ))}
              </div>

              <div className="goals-section">
                <h3 className="section-subtitle">Mục tiêu tương lai</h3>
                <div className="goals-content">
                  <div className="goal-item">
                    <span className="goal-icon">🎯</span>
                    <div>
                      <h4>Ngắn hạn (6 tháng)</h4>
                      <p>Tốt nghiệp với GPA xuất sắc và tìm vị trí Frontend Developer tại một công ty công nghệ uy tín.</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">🚀</span>
                    <div>
                      <h4>Trung hạn (2 năm)</h4>
                      <p>Trở thành Senior Frontend Developer, master các công nghệ như React, Next.js và có kinh nghiệm lead team nhỏ.</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">🌟</span>
                    <div>
                      <h4>Dài hạn (5 năm)</h4>
                      <p>Phát triển thành Fullstack Developer hoặc Technical Lead, đóng góp cho cộng đồng công nghệ và mentor các developer trẻ.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <h3>Hãy kết nối với tôi!</h3>
                <p>Tôi luôn sẵn sàng thảo luận về công nghệ, dự án mới hoặc đơn giản là trò chuyện về cuộc sống.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="cta-btn primary">
                    <span>Liên hệ ngay</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a href="/projects" className="cta-btn secondary">
                    <span>Xem dự án</span>
                  </a>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default About;