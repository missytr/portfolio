import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Java Programming Guide",
      desc: "Hướng dẫn học Java từ cơ bản đến nâng cao - Giới thiệu cú pháp, biến, kiểu dữ liệu, vòng lặp và các kiến thức nền tảng.",
      longDesc: "Series bài viết về Java programming bao gồm cú pháp cơ bản, OOP principles, data structures, và advanced topics. Phù hợp cho người mới bắt đầu học lập trình Java.",
      tech: ["Java", "OOP", "Data Structures", "Algorithms"],
      category: "fullstack",
      img: "/img/java1.jpg",
      status: "completed",
      year: "2024",
      blogLink: "/java1",
      github: "https://github.com/example/java-guide",
      features: [
        "Cú pháp Java cơ bản",
        "Object-Oriented Programming",
        "Data structures implementation", 
        "Algorithms và problem solving",
        "Best practices và coding standards"
      ],
      metrics: {
        users: "2,500+",
        performance: "98%",
        rating: "3.36/4"
      }
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      desc: "Cú pháp cơ bản JavaScript, biến, hàm, vòng lặp và nguyên tắc lập trình trong JavaScript cho người mới bắt đầu.",
      longDesc: "Bài viết chi tiết về JavaScript basics bao gồm syntax, variables, functions, loops, DOM manipulation và modern ES6+ features. Phù hợp cho beginners và intermediate developers.",
      tech: ["JavaScript", "ES6+", "DOM", "Async Programming"],
      category: "frontend",
      img: "/img/java1.jpg",
      status: "completed",
      year: "2024",
      blogLink: "/js1",
      github: "https://github.com/example/js-basics",
      features: [
        "JavaScript syntax cơ bản",
        "ES6+ modern features", 
        "DOM manipulation",
        "Asynchronous programming",
        "Event handling và callbacks"
      ],
      metrics: {
        users: "1,800+",
        performance: "97%",
        rating: "4.8/5"
      }
    },
    {
      id: 3,
      title: "AI Content Generator",
      desc: "Công cụ tạo nội dung tự động sử dụng AI, hỗ trợ multiple formats và custom templates cho marketing.",
      longDesc: "AI-powered content creation tool với GPT integration, template customization, và batch processing. Hỗ trợ SEO optimization và multi-language content generation.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      category: "ai",
      img: "/img/java1.jpg",
      status: "in-progress",
      year: "2024",
      github: "https://github.com/example/ai-content",
      live: "https://ai-content-demo.com",
      features: [
        "GPT-4 integration",
        "Custom templates",
        "SEO optimization",
        "Batch processing",
        "Multi-language support"
      ],
      metrics: {
        users: "500+",
        performance: "94%",
        rating: "4.9/5"
      }
    },
    {
      id: 4,
      title: "Java vs JavaScript Comparison",
      desc: "So sánh chi tiết giữa Java và JavaScript - hai ngôn ngữ lập trình phổ biến với tên gọi tương tự nhưng khác biệt hoàn toàn.",
      longDesc: "Bài viết phân tích sâu về sự khác biệt giữa Java và JavaScript, từ syntax, use cases, performance đến ecosystem. Giúp developers hiểu rõ khi nào nên sử dụng ngôn ngữ nào.",
      tech: ["Java", "JavaScript", "Comparison", "Programming Languages"],
      category: "frontend",
      img: "/img/java1.jpg",
      status: "completed",
      year: "2024",
      blogLink: "/compare",
      github: "https://github.com/example/java-vs-js",
      features: [
        "Syntax comparison",
        "Performance analysis",
        "Use case scenarios",
        "Ecosystem overview",
        "Learning roadmap"
      ],
      metrics: {
        users: "1,200+",
        performance: "99%",
        rating: "4.9/5"
      }
    },
    {
      id: 5,
      title: "Restaurant Management System",
      desc: "Hệ thống quản lý nhà hàng với POS, inventory management và customer analytics.",
      longDesc: "Complete restaurant management solution với POS system, inventory tracking, staff management và customer analytics dashboard.",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
      category: "fullstack",
      img: "/img/java1.jpg",
      status: "completed",
      year: "2023",
      github: "https://github.com/example/restaurant",
      live: "https://restaurant-demo.com",
      features: [
        "POS system",
        "Inventory management",
        "Staff scheduling",
        "Customer analytics",
        "Order tracking"
      ],
      metrics: {
        users: "150+",
        performance: "97%",
        rating: "4.6/5"
      }
    },
    {
      id: 6,
      title: "Advanced Java Programming",
      desc: "Hướng dẫn Java nâng cao - Collections Framework, Multithreading, Exception Handling và Design Patterns trong Java.",
      longDesc: "Bài viết chuyên sâu về các concepts nâng cao trong Java including generics, collections, concurrency, và enterprise patterns. Dành cho developers muốn master Java programming.",
      tech: ["Java", "Collections", "Multithreading", "Design Patterns"],
      category: "fullstack",
      img: "/img/java1.jpg",
      status: "completed",
      year: "2024",
      blogLink: "/java2",
      github: "https://github.com/example/advanced-java",
      features: [
        "Collections Framework mastery",
        "Multithreading và concurrency",
        "Exception handling best practices",
        "Design patterns implementation",
        "Performance optimization"
      ],
      metrics: {
        users: "1,500+",
        performance: "96%",
        rating: "4.9/5"
      }
    },
    {
      id: 7,
      title: "JavaScript Advanced Concepts",
      desc: "JavaScript nâng cao - Closures, Prototypes, Async/Await, Modules và các advanced concepts cho experienced developers.",
      longDesc: "Deep dive vào các advanced JavaScript topics như closure, prototype chain, asynchronous programming patterns, modules system và modern JavaScript ecosystem.",
      tech: ["JavaScript", "ES6+", "Async Programming", "Modules"],
      category: "frontend", 
      img: "/img/java1.jpg",
      status: "completed",
      year: "2024",
      blogLink: "/js2",
      github: "https://github.com/example/advanced-js",
      features: [
        "Closures và lexical scoping",
        "Prototype chain understanding",
        "Advanced async patterns",
        "Module systems (CommonJS, ES6)",
        "Performance optimization tips"
      ],
      metrics: {
        users: "1,100+", 
        performance: "97%",
        rating: "4.8/5"
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🎯', count: projects.length },
    { id: 'frontend', name: 'Frontend', icon: '🎨', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: projects.filter(p => p.category === 'ai').length }
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
              <span className="empty-icon">🔍</span>
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
          <div className="image-overlay">
            <div className="project-links">
              {project.blogLink && (
                <Link to={project.blogLink} className="project-link blog">
                  <span className="link-icon">📖</span>
                  <span>Đọc bài viết</span>
                </Link>
              )}
              {project.live && (
                <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">🌐</span>
                  <span>Live Demo</span>
                </a>
              )}
              {project.github && (
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">📂</span>
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
          <div className="status-badge">
            <span className={`status-dot ${project.status}`}></span>
            <span className="status-text">
              {project.status === 'completed' ? 'Hoàn thành' : 'Đang phát triển'}
            </span>
          </div>
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
            
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value">{project.metrics.users}</span>
                <span className="metric-label">Users</span>
              </div>
              <div className="metric">
                <span className="metric-value">{project.metrics.performance}</span>
                <span className="metric-label">Performance</span>
              </div>
              <div className="metric">
                <span className="metric-value">{project.metrics.rating}</span>
                <span className="metric-label">Rating</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;