import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Java Basics",
      desc: "Giới thiệu cú pháp, biến, kiểu dữ liệu, vòng lặp và các kiến thức nền tảng của ngôn ngữ Java.",
      longDesc: "Bài viết chi tiết về các concepts cơ bản trong Java programming, phù hợp cho beginners bắt đầu học lập trình.",
      img: "/img/java1.jpg",
      link: "/blog/java1",
      category: "java",
      readTime: "8 phút",
      difficulty: "Cơ bản",
      tags: ["Java", "Basics", "Variables", "Syntax"],
      author: "Tech Blogger",
      publishedDate: "2024-01-15",
      views: "2.5k"
    },
    {
      id: 2,
      title: "Java OOP",
      desc: "Khám phá lập trình hướng đối tượng: Class, Object, Inheritance, Polymorphism trong Java.",
      longDesc: "Deep dive vào Object-Oriented Programming concepts trong Java với examples thực tế và best practices.",
      img: "/img/java1.jpg",
      link: "/java2",
      category: "java",
      readTime: "12 phút",
      difficulty: "Trung bình",
      tags: ["Java", "OOP", "Classes", "Inheritance"],
      author: "Tech Blogger",
      publishedDate: "2024-01-20",
      views: "1.8k"
    },
    {
      id: 3,
      title: "Exception Handling trong Java",
      desc: "Tìm hiểu try-catch-finally, throws và cách tạo custom exception để xử lý lỗi hiệu quả.",
      longDesc: "Comprehensive guide về exception handling trong Java với real-world examples và best practices.",
      img: "/img/java1.jpg",
      link: "/java3",
      category: "java",
      readTime: "10 phút",
      difficulty: "Trung bình",
      tags: ["Java", "Exceptions", "Error Handling", "Try-Catch"],
      author: "Tech Blogger",
      publishedDate: "2024-01-25",
      views: "1.2k"
    },
    {
      id: 4,
      title: "Java Collections Framework",
      desc: "Giới thiệu List, Set, Map và cách áp dụng Collections Framework vào dự án thực tế.",
      longDesc: "Advanced tutorial về Java Collections với performance comparisons và use case scenarios.",
      img: "/img/java1.jpg",
      link: "/java4",
      category: "java",
      readTime: "15 phút",
      difficulty: "Nâng cao",
      tags: ["Java", "Collections", "List", "Map", "Set"],
      author: "Tech Blogger",
      publishedDate: "2024-02-01",
      views: "1.5k"
    },
    {
      id: 5,
      title: "JavaScript Basics",
      desc: "Cú pháp cơ bản, biến, hàm, vòng lặp và nguyên tắc lập trình trong JavaScript.",
      longDesc: "Complete beginner's guide to JavaScript covering syntax, functions, loops và modern programming concepts.",
      img: "/img/js.jpg",
      link: "/js1",
      category: "javascript",
      readTime: "10 phút",
      difficulty: "Cơ bản",
      tags: ["JavaScript", "Basics", "Functions", "Variables"],
      author: "Tech Blogger",
      publishedDate: "2024-02-05",
      views: "3.2k"
    },
    {
      id: 6,
      title: "DOM Manipulation",
      desc: "Cách truy cập và thay đổi nội dung HTML/CSS bằng JavaScript để tạo trang web tương tác.",
      longDesc: "Practical guide về DOM manipulation với real examples và interactive exercises.",
      img: "/img/js.jpg",
      link: "/js2",
      category: "javascript",
      readTime: "12 phút",
      difficulty: "Trung bình",
      tags: ["JavaScript", "DOM", "HTML", "CSS"],
      author: "Tech Blogger",
      publishedDate: "2024-02-10",
      views: "2.1k"
    },
    {
      id: 7,
      title: "Asynchronous JavaScript",
      desc: "Hiểu về callback, Promise, async/await và xử lý bất đồng bộ trong JavaScript hiện đại.",
      longDesc: "Advanced concepts in asynchronous JavaScript programming với real-world applications.",
      img: "/img/js.jpg",
      link: "/js3",
      category: "javascript",
      readTime: "14 phút",
      difficulty: "Nâng cao",
      tags: ["JavaScript", "Async", "Promise", "Callback"],
      author: "Tech Blogger",
      publishedDate: "2024-02-15",
      views: "1.7k"
    },
    {
      id: 8,
      title: "Modern JavaScript (ES6+)",
      desc: "Arrow function, destructuring, module, spread/rest và các tính năng hiện đại của JavaScript.",
      longDesc: "Comprehensive overview của ES6+ features với practical examples và migration strategies.",
      img: "/img/js.jpg",
      link: "/js4",
      category: "javascript",
      readTime: "16 phút",
      difficulty: "Nâng cao",
      tags: ["JavaScript", "ES6", "Arrow Functions", "Modules"],
      author: "Tech Blogger",
      publishedDate: "2024-02-20",
      views: "1.9k"
    },
    {
      id: 9,
      title: "Java vs JavaScript: So sánh chi tiết",
      desc: "So sánh cú pháp, ứng dụng, và định hướng nghề nghiệp giữa Java và JavaScript.",
      longDesc: "Detailed comparison giữa Java và JavaScript để help developers choose the right technology path.",
      img: "/img/java-js.jpg",
      link: "/compare",
      category: "comparison",
      readTime: "18 phút",
      difficulty: "Trung bình",
      tags: ["Java", "JavaScript", "Comparison", "Career"],
      author: "Tech Blogger",
      publishedDate: "2024-02-25",
      views: "4.1k"
    },
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📚', count: blogs.length },
    { id: 'java', name: 'Java', icon: '☕', count: blogs.filter(b => b.category === 'java').length },
    { id: 'javascript', name: 'JavaScript', icon: '⚡', count: blogs.filter(b => b.category === 'javascript').length },
    { id: 'comparison', name: 'So sánh', icon: '⚖️', count: blogs.filter(b => b.category === 'comparison').length }
  ];

  const stats = {
    totalPosts: blogs.length,
    totalViews: blogs.reduce((sum, blog) => sum + parseFloat(blog.views.replace('k', '')) * 1000, 0),
    avgReadTime: Math.round(blogs.reduce((sum, blog) => sum + parseInt(blog.readTime), 0) / blogs.length),
    categories: categories.length - 1
  };

  const filteredBlogs = activeFilter === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeFilter);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
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
              <span className="title-main">Tech Blog</span>
              <span className="title-sub">Knowledge Sharing & Programming Insights</span>
            </h1>
            <p className="hero-description">
              Chia sẻ kiến thức lập trình, kinh nghiệm thực tế và các tips học hiệu quả. 
              Từ Java basics đến JavaScript advanced concepts - tất cả đều có ở đây!
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.totalPosts}</span>
                <span className="stat-label">Bài viết</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.categories}</span>
                <span className="stat-label">Chủ đề</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <nav className="blog-nav">
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

      {/* Blog Content */}
      <main className="blog-main">
        <div className="blog-container">
          {/* Debug info - sẽ xóa sau */}
          <div style={{color: 'white', padding: '10px', marginBottom: '20px'}}>
            Tổng blogs: {blogs.length} | Filter: {activeFilter} | Filtered: {filteredBlogs.length}
          </div>
          
          <div className={`blog-grid ${isLoaded ? 'loaded' : ''}`}>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))
            ) : (
              <div className="empty-state">
                <span className="empty-icon">📖</span>
                <h3>Không tìm thấy bài viết</h3>
                <p>Không có bài viết nào trong danh mục này.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function BlogCard({ blog, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Cơ bản': return 'difficulty-basic';
      case 'Trung bình': return 'difficulty-medium';
      case 'Nâng cao': return 'difficulty-advanced';
      default: return 'difficulty-basic';
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <article 
      className={`blog-card ${index === 0 ? 'featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-header">
        <div className="blog-image">
          <img 
            src={blog.img} 
            alt={blog.title}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <div className="image-overlay">
            <Link to={blog.link} className="read-btn">
              <span className="btn-icon">📖</span>
              <span>Đọc ngay</span>
            </Link>
          </div>
          <div className={`difficulty-badge ${getDifficultyColor(blog.difficulty)}`}>
            {blog.difficulty}
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="blog-meta">
          <span className="read-time">⏱️ {blog.readTime}</span>
          <span className="views">👀 {blog.views}</span>
          <span className="publish-date">📅 {new Date(blog.publishedDate).toLocaleDateString('vi-VN')}</span>
        </div>
        
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">{blog.desc}</p>
        
        <div className="blog-tags">
          {blog.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="card-footer">
          <span className="author">✍️ {blog.author}</span>
          <Link to={blog.link} className="read-more">
            Đọc tiếp →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Blog;