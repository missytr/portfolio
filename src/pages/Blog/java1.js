import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blog/BlogPost.css";

function Java1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogData = {
    title: "Java Basics - Kiến Thức Nền Tảng",
    subtitle: "Giới thiệu cú pháp, biến, kiểu dữ liệu, vòng lặp và các kiến thức nền tảng của Java",
    category: "Java Programming",
    author: "Trần Khánh Linh",
    publishDate: "2024-10-15",
    tags: ["Java", "Programming", "Basics", "OOP", "Beginner"],
    difficulty: "Beginner"
  };

  return (
    <div className={`blog-post-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-breadcrumb">
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/blog?category=java" className="breadcrumb-link">Java</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">Java Basics</span>
          </div>
          
          <div className="blog-category-badge">
            <span className="category-icon">☕</span>
            {blogData.category}
          </div>
          
          <h1 className="blog-title">{blogData.title}</h1>
          <p className="blog-subtitle">{blogData.subtitle}</p>
          
          <div className="blog-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span>{blogData.author}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span>{new Date(blogData.publishDate).toLocaleDateString('vi-VN')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span>5 phút đọc</span>
            </div>
            <div className="meta-item difficulty">
              <span className="meta-icon">🎯</span>
              <span>{blogData.difficulty}</span>
            </div>
          </div>
        </div>
        
        <div className="blog-hero-image">
          <div className="image-placeholder">☕ Java</div>
          <div className="image-overlay"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-container">
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">📋 Mục lục</h3>
            <nav className="table-of-contents">
              <a href="#intro" className="toc-link">1. Giới thiệu về Java</a>
              <a href="#structure" className="toc-link">2. Cấu trúc chương trình</a>
              <a href="#variables" className="toc-link">3. Biến và kiểu dữ liệu</a>
              <a href="#conditions" className="toc-link">4. Câu lệnh điều kiện</a>
              <a href="#loops" className="toc-link">5. Vòng lặp</a>
              <a href="#summary" className="toc-link">6. Tổng kết</a>
            </nav>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">🏷️ Tags</h3>
            <div className="blog-tags">
              {blogData.tags.map((tag, index) => (
                <span key={index} className="blog-tag">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">📚 Bài viết liên quan</h3>
            <div className="related-posts">
              <Link to="/blog/java2" className="related-post">
                <span className="related-icon">☕</span>
                <span>Java OOP Fundamentals</span>
              </Link>
              <Link to="/blog/java3" className="related-post">
                <span className="related-icon">☕</span>
                <span>Java Collections Framework</span>
              </Link>
            </div>
          </div>
        </div>

        <article className="blog-content">
                  <section id="intro" className="content-section">
            <h2 className="section-title">
              <span className="section-number">01</span>
              <span className="section-text">Giới thiệu về Java</span>
            </h2>
            <div className="section-content">
              <p className="highlight-text">
                Java là một ngôn ngữ lập trình hướng đối tượng (OOP) mạnh mẽ và phổ biến, 
                được sử dụng rộng rãi trong phát triển ứng dụng web, mobile (Android), 
                và các hệ thống doanh nghiệp lớn.
              </p>
              
              <div className="info-box">
                <h4>💡 Tại sao nên học Java?</h4>
                <ul>
                  <li>Đa nền tảng (Write Once, Run Anywhere)</li>
                  <li>Cộng đồng phát triển lớn mạnh</li>
                  <li>Bảo mật cao và hiệu suất tốt</li>
                  <li>Nhiều framework và thư viện hỗ trợ</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="structure" className="content-section">
            <h2 className="section-title">
              <span className="section-number">02</span>
              <span className="section-text">Cấu trúc cơ bản của chương trình Java</span>
            </h2>
            <div className="section-content">
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Main.java</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}</pre>
              </div>
              
              <div className="explanation">
                <p>
                  Mỗi chương trình Java đều có ít nhất một <strong>class</strong>, và phương thức
                  <code> main() </code> là điểm bắt đầu thực thi của chương trình.
                </p>
              </div>
            </div>
          </section>

          <section id="variables" className="content-section">
            <h2 className="section-title">
              <span className="section-number">03</span>
              <span className="section-text">Biến và kiểu dữ liệu</span>
            </h2>
            <div className="section-content">
              <div className="data-types-grid">
                <div className="data-type-card">
                  <div className="type-icon">🔢</div>
                  <h4>int</h4>
                  <p>Số nguyên</p>
                  <code>int age = 20;</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">📊</div>
                  <h4>double</h4>
                  <p>Số thực</p>
                  <code>double score = 9.5;</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">✅</div>
                  <h4>boolean</h4>
                  <p>Đúng/Sai</p>
                  <code>boolean isStudent = true;</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">📝</div>
                  <h4>String</h4>
                  <p>Chuỗi ký tự</p>
                  <code>String name = "Linh";</code>
                </div>
              </div>

              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Ví dụ khai báo biến</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`// Khai báo và khởi tạo biến
int age = 20;
double score = 9.5;
boolean isStudent = true;
String name = "Linh";

// Sử dụng biến
System.out.println("Tên: " + name);
System.out.println("Tuổi: " + age);`}</pre>
              </div>
            </div>
          </section>

          <section id="summary" className="content-section">
            <h2 className="section-title">
              <span className="section-number">04</span>
              <span className="section-text">Tổng kết</span>
            </h2>
            <div className="section-content">
              <div className="summary-box">
                <h4>📚 Những gì bạn đã học:</h4>
                <ul className="summary-list">
                  <li>Cấu trúc cơ bản của chương trình Java</li>
                  <li>Các kiểu dữ liệu primitive quan trọng</li>
                  <li>Cách khai báo và sử dụng biến</li>
                  <li>Tầm quan trọng của Java trong lập trình</li>
                </ul>
              </div>
              
              <div className="next-steps">
                <h4>🚀 Bước tiếp theo:</h4>
                <p>
                  Bây giờ bạn đã nắm vững các khái niệm cơ bản của Java. 
                  Hãy luyện tập thật nhiều và khám phá các chủ đề nâng cao như OOP, 
                  Exception Handling, và Collections Framework!
                </p>
              </div>
            </div>
          </section>

          <div className="blog-navigation">
            <Link to="/blog" className="nav-button back-button">
              <span className="nav-icon">←</span>
              <span>Quay lại Blog</span>
            </Link>
            <Link to="/blog/java2" className="nav-button next-button">
              <span>Java OOP Fundamentals</span>
              <span className="nav-icon">→</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Java1;


