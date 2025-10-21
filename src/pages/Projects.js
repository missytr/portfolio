import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import img_daphongtro from "../img/img_daphongtro.png";
import img_daskillcoder from "../img/img_daskillcoder.png";
import img_portfolio from "../img/img_portfolio.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      desc: "Xây dựng CV giới thiệu bản thân trực tuyến với React, bao gồm dự án, blog và liên hệ.",
      tech: ["React.js", "CSS", "JavaScript", "HTML"],
      category: "frontend",
      img: img_portfolio,
      status: "completed",
      year: "2025",
      features: [
        "Giới thiệu bản thân tôi",
      ],
    },
    {
      id: 2,
      title: "Website tìm kiếm phòng trọ",
      desc: "Hệ thống tìm kiếm phòng trọ với bộ lọc nâng cao, đánh giá người dùng.",
      longDesc: "Ứng dụng web tìm kiếm phòng trọ với advanced filtering, user reviews. Tối ưu hóa trải nghiệm người dùng với responsive design và performance enhancements.",
      tech: ["C#", "Asp.net"],
      category: "fullstack",
      img: img_daphongtro,
      status: "completed",
      year: "2024",
      features: [
        "Responsive design",
        "MVC architecture",
      ],
    },
    {
      id: 3,
      title: "Skill Coder",
      desc: "Giải pháp cho học lập trình trực tuyến.",
      longDesc: "Nền tảng học lập trình trực tuyến để cá nhân hóa lộ trình học tập, cung cấp bài tập thực hành và phản hồi tức thì giúp người học nâng cao kỹ năng nhanh chóng.",
      tech: ["React.js", "TypeScript", "Prisma", "PostgreSQL"],
      category: "frontend",
      img: img_daskillcoder,
      status: "in-progress",
      year: "2024",
      features: [
        "Học mà chơi, chơi mà học",
      ],
    },
    {
      id: 4,
      title: "Ứng dụng quản lý sinh viên",
      desc: "Xây dựng ứng dụng quản lý sinh viên với tính năng CRUD, tìm kiếm và phân trang.",
      longDesc: "Ứng dụng quản lý sinh viên toàn diện với chức năng CRUD, tìm kiếm nâng cao và phân trang. Giao diện thân thiện, dễ sử dụng giúp quản lý thông tin sinh viên hiệu quả.",
      tech: ["C#", "Asp.net", "SQL Server"],
      category: "fullstack",
      img:"",
      status: "completed",
      year: "2024",
      features: [
        "CRUD operations",
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">Dự án của tôi</span>
              <span className="title-sub">Creative Solutions & Digital Experiences</span>
            </h1>
            <p className="hero-description">
              Khám phá những dự án mà tôi đã tạo ra - từ ứng dụng web hiện đại đến các giải pháp AI sáng tạo. 
              Mỗi dự án đều phản ánh đam mê công nghệ và commitment về chất lượng.
            </p>
            
            
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <nav className="projects-nav">
        <div className="nav-container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Projects Grid */}
      <main className="projects-main">
        <div className="projects-container">
          <div className={`projects-grid ${isLoaded ? 'loaded' : ''}`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <h3>Không tìm thấy dự án</h3>
              <p>Không có dự án nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-header">
        <div className="project-image">
          <img 
            src={project.img} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
        </div>
      </div>

      <div className="card-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        
        <p className="project-description">
          {isExpanded ? project.longDesc : project.desc}
        </p>
        
        {project.longDesc !== project.desc && (
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Thu gọn' : 'Xem thêm'}
            <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>↓</span>
          </button>
        )}

        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>

        {isExpanded && (
          <div className="project-details">
            <div className="project-features">
              <h4>Tính năng nổi bật:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;