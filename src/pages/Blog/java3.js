import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blog/BlogPost.css";

function Java3() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogData = {
    title: "Java Collections Framework",
    subtitle: "Tìm hiểu về Collections Framework: ArrayList, HashMap, HashSet và các cấu trúc dữ liệu quan trọng",
    category: "Java Programming",
    author: "Trần Khánh Linh",
    publishDate: "2024-10-17",
    tags: ["Java", "Collections", "ArrayList", "HashMap", "HashSet", "Data Structures"],
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
            <Link to="/blog?category=java" className="breadcrumb-link">Java</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">Java Collections</span>
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
              <span>10 phút đọc</span>
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
              <a href="#intro" className="toc-link">1. Giới thiệu Collections</a>
              <a href="#arraylist" className="toc-link">2. ArrayList</a>
              <a href="#hashmap" className="toc-link">3. HashMap</a>
              <a href="#hashset" className="toc-link">4. HashSet</a>
              <a href="#comparison" className="toc-link">5. So sánh Collections</a>
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
              <Link to="/blog/java1" className="related-post">
                <span className="related-icon">☕</span>
                <span>Java Basics</span>
              </Link>
              <Link to="/blog/java4" className="related-post">
                <span className="related-icon">☕</span>
                <span>Advanced Java Topics</span>
              </Link>
            </div>
          </div>
        </div>

        <article className="blog-content">
                  <section id="intro" className="content-section">
            <h2 className="section-title">
              <span className="section-number">01</span>
              <span className="section-text">Giới thiệu về Collections Framework</span>
            </h2>
            <div className="section-content">
              <p className="highlight-text">
                Java Collections Framework là một kiến trúc thống nhất để lưu trữ và thao tác
                với nhóm các đối tượng. Nó cung cấp các interface và classes để xử lý dữ liệu
                một cách hiệu quả và linh hoạt.
              </p>
              
              <div className="info-box">
                <h4>📦 Các Collections phổ biến</h4>
                <ul>
                  <li><strong>List:</strong> ArrayList, LinkedList - dữ liệu có thứ tự</li>
                  <li><strong>Set:</strong> HashSet, TreeSet - dữ liệu không trùng lặp</li>
                  <li><strong>Map:</strong> HashMap, TreeMap - lưu trữ key-value</li>
                  <li><strong>Queue:</strong> LinkedList, PriorityQueue - hàng đợi</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="arraylist" className="content-section">
            <h2 className="section-title">
              <span className="section-number">02</span>
              <span className="section-text">ArrayList - Danh sách động</span>
            </h2>
            <div className="section-content">
              <p>
                <strong>ArrayList</strong> là một List có khả năng thay đổi kích thước động.
                Rất hữu ích khi không biết trước số lượng phần tử.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">ArrayList Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        
        // Thêm phần tử
        fruits.add("Táo");
        fruits.add("Chuối");
        fruits.add("Cam");
        
        // Truy cập phần tử
        System.out.println(fruits.get(0)); // Táo
        
        // Duyệt danh sách
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}`}</pre>
              </div>
            </div>
          </section>

          <section id="hashmap" className="content-section">
            <h2 className="section-title">
              <span className="section-number">03</span>
              <span className="section-text">HashMap - Lưu trữ Key-Value</span>
            </h2>
            <div className="section-content">
              <p>
                <strong>HashMap</strong> lưu trữ dữ liệu dưới dạng cặp key-value,
                cho phép truy cập nhanh chóng thông qua key.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">HashMap Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> ages = new HashMap<>();
        
        // Thêm cặp key-value
        ages.put("Linh", 21);
        ages.put("Nam", 22);
        ages.put("Hoa", 20);
        
        // Truy cập value qua key
        System.out.println(ages.get("Linh")); // 21
        
        // Duyệt HashMap
        for (String name : ages.keySet()) {
            System.out.println(name + ": " + ages.get(name));
        }
    }
}`}</pre>
              </div>
            </div>
          </section>

          <section id="hashset" className="content-section">
            <h2 className="section-title">
              <span className="section-number">04</span>
              <span className="section-text">HashSet - Tập hợp không trùng lặp</span>
            </h2>
            <div className="section-content">
              <p>
                <strong>HashSet</strong> lưu trữ các phần tử duy nhất, không cho phép
                trùng lặp và không đảm bảo thứ tự.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">HashSet Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> colors = new HashSet<>();
        
        // Thêm phần tử
        colors.add("Đỏ");
        colors.add("Xanh");
        colors.add("Vàng");
        colors.add("Đỏ"); // Trùng lặp - không thêm
        
        System.out.println(colors.size()); // 3
        
        // Kiểm tra có tồn tại
        if (colors.contains("Đỏ")) {
            System.out.println("Có màu đỏ");
        }
    }
}`}</pre>
              </div>

              <div className="tip-box">
                <h4>💡 Khi nào dùng HashSet?</h4>
                <p>Dùng khi cần loại bỏ phần tử trùng lặp và không quan tâm đến thứ tự!</p>
              </div>
            </div>
          </section>

          <section id="comparison" className="content-section">
            <h2 className="section-title">
              <span className="section-number">05</span>
              <span className="section-text">So sánh các Collections</span>
            </h2>
            <div className="section-content">
              <div className="data-types-grid">
                <div className="data-type-card">
                  <div className="type-icon">📝</div>
                  <h4>ArrayList</h4>
                  <p>Danh sách có thứ tự, cho phép trùng lặp</p>
                  <code>Truy cập: O(1)</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">🗝️</div>
                  <h4>HashMap</h4>
                  <p>Lưu key-value, truy cập nhanh</p>
                  <code>Truy cập: O(1)</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">🎯</div>
                  <h4>HashSet</h4>
                  <p>Tập hợp không trùng lặp</p>
                  <code>Kiểm tra: O(1)</code>
                </div>
                <div className="data-type-card">
                  <div className="type-icon">📊</div>
                  <h4>TreeMap</h4>
                  <p>Map có thứ tự theo key</p>
                  <code>Truy cập: O(log n)</code>
                </div>
              </div>
            </div>
          </section>

          <section id="summary" className="content-section">
            <h2 className="section-title">
              <span className="section-number">06</span>
              <span className="section-text">Tổng kết</span>
            </h2>
            <div className="section-content">
              <div className="summary-box">
                <h4>📚 Những gì bạn đã học:</h4>
                <ul className="summary-list">
                  <li>Tổng quan về Java Collections Framework</li>
                  <li>ArrayList cho danh sách động</li>
                  <li>HashMap để lưu trữ key-value</li>
                  <li>HashSet cho tập hợp không trùng lặp</li>
                  <li>So sánh hiệu suất các Collections</li>
                </ul>
              </div>
              
              <div className="next-steps">
                <h4>🚀 Bước tiếp theo:</h4>
                <p>
                  Hãy thực hành với các Collections khác như LinkedList, TreeSet, PriorityQueue
                  và tìm hiểu về Comparator để sắp xếp dữ liệu!
                </p>
              </div>
            </div>
          </section>

          <div className="blog-navigation">
            <Link to="/blog/java2" className="nav-button back-button">
              <span className="nav-icon">←</span>
              <span>Java OOP</span>
            </Link>
            <Link to="/blog/java4" className="nav-button next-button">
              <span>Advanced Java</span>
              <span className="nav-icon">→</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Java3;
