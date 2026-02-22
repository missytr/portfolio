import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blog/BlogPost.css";

function Compare() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogData = {
    title: "Java vs JavaScript - So Sánh Chi Tiết",
    subtitle: "Phân tích sự khác biệt giữa Java và JavaScript trong lập trình hiện đại",
    category: "Programming Comparison",
    author: "Trần Khánh Linh", 
    publishDate: "2024-10-23",
    tags: ["Java", "JavaScript", "Comparison", "Programming", "Languages", "Development"],
    difficulty: "Intermediate"
  };

  return (
    <div className={`blog-post-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-breadcrumb">
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/blog?category=comparison" className="breadcrumb-link">Comparison</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">Java vs JavaScript</span>
          </div>
          
          <div className="blog-category-badge">
            <span className="category-icon">⚖️</span>
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
        
      </div>

      {/* Main Content */}
      <div className="blog-container">
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">📋 Mục lục</h3>
            <nav className="table-of-contents">
              <a href="#intro" className="toc-link">1. Giới thiệu về JavaScript</a>
              <a href="#variables" className="toc-link">2. Variables & Data Types</a>
              <a href="#functions" className="toc-link">3. Functions</a>
              <a href="#dom" className="toc-link">4. DOM Manipulation</a>
              <a href="#es6" className="toc-link">5. ES6+ Features</a>
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
              <Link to="/blog/js2" className="related-post">
                <span className="related-icon">🟨</span>
                <span>JavaScript Advanced</span>
              </Link>
              <Link to="/blog/js3" className="related-post">
                <span className="related-icon">🟨</span>
                <span>JavaScript Frameworks</span>
              </Link>
            </div>
          </div>
        </div>

        <article className="blog-content">
                            <section id="intro" className="content-section">
            <h2 className="section-title">
              <span className="section-number">01</span>
              <span className="section-text">Giới thiệu về JavaScript</span>
            </h2>
            <div className="section-content">
              <p className="highlight-text">
                JavaScript là ngôn ngữ lập trình động, được sử dụng chủ yếu để tạo ra
                các trang web tương tác. Từ một ngôn ngữ client-side đơn giản, JavaScript
                đã phát triển thành một trong những ngôn ngữ phổ biến nhất thế giới.
              </p>
              
              <div className="info-box">
                <h4>🌟 Tại sao nên học JavaScript?</h4>
                <ul>
                  <li>Ngôn ngữ duy nhất chạy được trên browser</li>
                  <li>Full-stack development với Node.js</li>
                  <li>Hệ sinh thái thư viện và framework phong phú</li>
                  <li>Cộng đồng phát triển lớn mạnh</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="variables" className="content-section">
            <h2 className="section-title">
              <span className="section-number">02</span>
              <span className="section-text">Variables và Data Types</span>
            </h2>
            <div className="section-content">
              <div className="data-types-grid">
                <div className="data-type-card">
                  <div className="type-icon">📝</div>
                  <h4>let/const</h4>
                  <p>Block-scoped variables</p>
                  <code>let name = "Linh";</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">🔢</div>
                  <h4>Number</h4>
                  <p>Số nguyên và thực</p>
                  <code>let age = 21;</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">✅</div>
                  <h4>Boolean</h4>
                  <p>True/False</p>
                  <code>let isActive = true;</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">📋</div>
                  <h4>Array</h4>
                  <p>Mảng dữ liệu</p>
                  <code>let items = [1, 2, 3];</code>
                </div>
              </div>

              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Variable Declaration</span>
                  <span className="code-language">JavaScript</span>
                </div>
                <pre className="code-block">{`// ES6+ Variable Declaration
const PI = 3.14159; // Constant
let userName = "Linh"; // Mutable
let age = 21;
let isStudent = true;

// Arrays and Objects
let hobbies = ["coding", "reading", "music"];
let person = {
  name: "Linh",
  age: 21,
  skills: ["JavaScript", "React", "Node.js"]
};

console.log(\`Hello, \${userName}!\`); // Template literal`}</pre>
              </div>
            </div>
          </section>

          <section id="functions" className="content-section">
            <h2 className="section-title">
              <span className="section-number">03</span>
              <span className="section-text">Functions</span>
            </h2>
            <div className="section-content">
              <p>
                Functions là khối code có thể tái sử dụng. JavaScript hỗ trợ nhiều cách
                khai báo function khác nhau.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Function Examples</span>
                  <span className="code-language">JavaScript</span>
                </div>
                <pre className="code-block">{`// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow Function (ES6+)
const add = (a, b) => a + b;

// Function Expression
const multiply = function(x, y) {
  return x * y;
};

// Higher-order function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`}</pre>
              </div>
            </div>
          </section>

          <section id="dom" className="content-section">
            <h2 className="section-title">
              <span className="section-number">04</span>
              <span className="section-text">DOM Manipulation</span>
            </h2>
            <div className="section-content">
              <p>
                DOM (Document Object Model) cho phép JavaScript tương tác với HTML elements
                để tạo ra các trang web động và tương tác.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">DOM Examples</span>
                  <span className="code-language">JavaScript</span>
                </div>
                <pre className="code-block">{`// Select elements
const title = document.getElementById('title');
const buttons = document.querySelectorAll('.btn');

// Modify content
title.textContent = 'Welcome to JavaScript!';
title.style.color = '#ffd700';

// Add event listeners
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Create new elements
const newDiv = document.createElement('div');
newDiv.className = 'highlight';
newDiv.innerHTML = '<p>Dynamic content!</p>';
document.body.appendChild(newDiv);`}</pre>
              </div>

              <div className="tip-box">
                <h4>💡 Modern DOM APIs</h4>
                <p>Sử dụng <code>querySelector()</code> và <code>addEventListener()</code> thay cho các method cũ!</p>
              </div>
            </div>
          </section>

          <section id="summary" className="content-section">
            <h2 className="section-title">
              <span className="section-number">05</span>
              <span className="section-text">Tổng kết</span>
            </h2>
            <div className="section-content">
              <div className="summary-box">
                <h4>📚 Những gì bạn đã học:</h4>
                <ul className="summary-list">
                  <li>Tại sao JavaScript quan trọng trong web development</li>
                  <li>Variables và data types trong ES6+</li>
                  <li>Các cách khai báo và sử dụng functions</li>
                  <li>DOM manipulation để tạo trang web tương tác</li>
                </ul>
              </div>
              
              <div className="next-steps">
                <h4>🚀 Bước tiếp theo:</h4>
                <p>
                  Hãy thực hành với các concepts vừa học và khám phá các chủ đề nâng cao như
                  Promises, Async/Await, và các JavaScript frameworks như React, Vue.js!
                </p>
              </div>
            </div>
          </section>

          <div className="blog-navigation">
            <Link to="/blog" className="nav-button back-button">
              <span className="nav-icon">←</span>
              <span>Quay lại Blog</span>
            </Link>
            <Link to="/blog/js2" className="nav-button next-button">
              <span>JavaScript Advanced</span>
              <span className="nav-icon">→</span>
            </Link>
          </div>

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

export default Compare;


