import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blog/BlogPost.css";

function Java4() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogData = {
    title: "Advanced Java Topics",
    subtitle:
      "Khám phá các chủ đề nâng cao: Multithreading, Exception Handling, Generics và Stream API",
    category: "Java Programming",
    author: "Trần Khánh Linh",
    publishDate: "2024-10-18",
    tags: [
      "Java",
      "Advanced",
      "Multithreading",
      "Exceptions",
      "Generics",
      "Stream API",
    ],
    difficulty: "Advanced",
  };

  return (
    <div className={`blog-post-page ${isLoaded ? "loaded" : ""}`}>
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-breadcrumb">
            <Link to="/blog" className="breadcrumb-link">
              Blog
            </Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/blog?category=java" className="breadcrumb-link">
              Java
            </Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">Advanced Java</span>
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
              <span>{new Date(blogData.publishDate).toLocaleDateString("vi-VN")}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span>12 phút đọc</span>
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
              <a href="#intro" className="toc-link">1. Giới thiệu</a>
              <a href="#multithreading" className="toc-link">2. Multithreading</a>
              <a href="#exceptions" className="toc-link">3. Exception Handling</a>
              <a href="#generics" className="toc-link">4. Generics</a>
              <a href="#streams" className="toc-link">5. Stream API</a>
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
                <span>Java OOP</span>
              </Link>
              <Link to="/blog/java3" className="related-post">
                <span className="related-icon">☕</span>
                <span>Java Collections</span>
              </Link>
            </div>
          </div>
        </div>

        <article className="blog-content">
          {/* 01 */}
          <section id="intro" className="content-section">
            <h2 className="section-title">
              <span className="section-number">01</span>
              <span className="section-text">Giới thiệu về Advanced Java</span>
            </h2>
            <div className="section-content">
              <p className="highlight-text">
                Sau khi nắm vững Java cơ bản, bạn cần tìm hiểu các chủ đề nâng cao
                như đa luồng, xử lý ngoại lệ, generics, và Stream API — những công
                cụ mạnh mẽ giúp bạn viết mã linh hoạt, tối ưu và hiện đại hơn.
              </p>
            </div>
          </section>

          {/* 02 */}
          <section id="multithreading" className="content-section">
            <h2 className="section-title">
              <span className="section-number">02</span>
              <span className="section-text">Multithreading – Lập trình đa luồng</span>
            </h2>
            <div className="section-content">
              <p>
                Multithreading cho phép chương trình thực hiện nhiều công việc đồng thời,
                tận dụng tối đa tài nguyên CPU. Mỗi “thread” là một luồng thực thi riêng.
              </p>

              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Thread Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}`}</pre>
              </div>

              <div className="tip-box">
                <h4>💡 Gợi ý:</h4>
                <p>Dùng `ExecutorService` thay vì `Thread` để quản lý luồng hiệu quả hơn.</p>
              </div>
            </div>
          </section>

          {/* 03 */}
          <section id="exceptions" className="content-section">
            <h2 className="section-title">
              <span className="section-number">03</span>
              <span className="section-text">Exception Handling – Xử lý ngoại lệ</span>
            </h2>
            <div className="section-content">
              <p>
                Ngoại lệ (Exception) xảy ra khi chương trình gặp lỗi trong quá trình chạy.
                Xử lý ngoại lệ giúp chương trình không bị dừng đột ngột.
              </p>
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Try-Catch Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // lỗi chia cho 0
        } catch (ArithmeticException e) {
            System.out.println("Lỗi: " + e.getMessage());
        } finally {
            System.out.println("Luôn chạy dù có lỗi hay không.");
        }
    }
}`}</pre>
              </div>
            </div>
          </section>

          {/* 04 */}
          <section id="generics" className="content-section">
            <h2 className="section-title">
              <span className="section-number">04</span>
              <span className="section-text">Generics – Lập trình tổng quát</span>
            </h2>
            <div className="section-content">
              <p>
                Generics giúp bạn viết mã có thể dùng lại, an toàn kiểu dữ liệu
                mà không cần ép kiểu thủ công.
              </p>

              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Generic Class Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`class Box<T> {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}

public class Main {
    public static void main(String[] args) {
        Box<Integer> intBox = new Box<>();
        intBox.set(100);
        System.out.println(intBox.get());
    }
}`}</pre>
              </div>
            </div>
          </section>

          {/* 05 */}
          <section id="streams" className="content-section">
            <h2 className="section-title">
              <span className="section-number">05</span>
              <span className="section-text">Stream API – Lập trình hàm trong Java</span>
            </h2>
            <div className="section-content">
              <p>
                Stream API (Java 8+) giúp xử lý tập hợp dữ liệu theo phong cách hàm,
                gọn gàng và dễ đọc hơn.
              </p>

              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Stream Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`import java.util.Arrays;
import java.util.List;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Linh", "Nam", "Hoa", "Minh");
        names.stream()
             .filter(name -> name.startsWith("H"))
             .map(String::toUpperCase)
             .forEach(System.out::println);
    }
}`}</pre>
              </div>
            </div>
          </section>

          {/* 06 */}
          <section id="summary" className="content-section">
            <h2 className="section-title">
              <span className="section-number">06</span>
              <span className="section-text">Tổng kết</span>
            </h2>
            <div className="section-content">
              <div className="summary-box">
                <h4>📚 Bạn đã học được:</h4>
                <ul className="summary-list">
                  <li>Khái niệm và cách dùng Multithreading</li>
                  <li>Cách xử lý lỗi bằng Exception Handling</li>
                  <li>Viết code an toàn và linh hoạt với Generics</li>
                  <li>Sử dụng Stream API để xử lý dữ liệu hiện đại</li>
                </ul>
              </div>

              <div className="next-steps">
                <h4>🚀 Bước tiếp theo:</h4>
                <p>
                  Hãy tìm hiểu thêm về Java Concurrency API, Lambda Expressions,
                  và Optional để nâng cao kỹ năng lập trình Java của bạn!
                </p>
              </div>
            </div>
          </section>

          <div className="blog-navigation">
            <Link to="/blog/java3" className="nav-button back-button">
              <span className="nav-icon">←</span>
              <span>Java Collections</span>
            </Link>
            <Link to="/blog/java5" className="nav-button next-button">
              <span>Java Stream API</span>
              <span className="nav-icon">→</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Java4;
