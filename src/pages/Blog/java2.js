import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blog/BlogPost.css";

function Java2() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogData = {
    title: "Java OOP - Lập Trình Hướng Đối Tượng",
    subtitle: "Khám phá lập trình hướng đối tượng: Class, Object, Inheritance, Polymorphism và các tính chất OOP",
    category: "Java Programming",
    author: "Trần Khánh Linh",
    publishDate: "2024-10-16",
    tags: ["Java", "OOP", "Class", "Object", "Inheritance", "Polymorphism"],
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
            <span className="breadcrumb-current">Java OOP</span>
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
              <a href="#intro" className="toc-link">1. Giới thiệu về OOP</a>
              <a href="#class-object" className="toc-link">2. Class và Object</a>
              <a href="#inheritance" className="toc-link">3. Tính kế thừa</a>
              <a href="#polymorphism" className="toc-link">4. Tính đa hình</a>
              <a href="#encapsulation" className="toc-link">5. Tính đóng gói</a>
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
              <span className="section-text">Giới thiệu về OOP trong Java</span>
            </h2>
            <div className="section-content">
              <p className="highlight-text">
                OOP (Object-Oriented Programming) là mô hình lập trình dựa trên khái niệm
                "đối tượng" — nơi dữ liệu và hành vi được đóng gói chung lại.
                Java là một trong những ngôn ngữ hỗ trợ OOP mạnh mẽ nhất.
              </p>
              
              <div className="info-box">
                <h4>🏗️ 4 Tính chất chính của OOP</h4>
                <ul>
                  <li><strong>Encapsulation:</strong> Đóng gói dữ liệu và phương thức</li>
                  <li><strong>Inheritance:</strong> Kế thừa thuộc tính từ lớp cha</li>
                  <li><strong>Polymorphism:</strong> Đa hình - cùng hành vi, khác cách thực hiện</li>
                  <li><strong>Abstraction:</strong> Trừu tượng hóa các khái niệm phức tạp</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="class-object" className="content-section">
            <h2 className="section-title">
              <span className="section-number">02</span>
              <span className="section-text">Class và Object</span>
            </h2>
            <div className="section-content">
              <p>
                <strong>Class</strong> là bản thiết kế (blueprint) cho các đối tượng,
                còn <strong>Object</strong> là thể hiện cụ thể của lớp.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Student.java</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`public class Student {
    String name;
    int age;

    void study() {
        System.out.println(name + " đang học Java");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Linh";
        s1.age = 21;
        s1.study();
    }
}`}</pre>
              </div>
            </div>
          </section>

          <section id="inheritance" className="content-section">
            <h2 className="section-title">
              <span className="section-number">03</span>
              <span className="section-text">Tính kế thừa (Inheritance)</span>
            </h2>
            <div className="section-content">
              <p>
                Kế thừa cho phép một lớp <strong>con</strong> sử dụng lại thuộc tính và phương thức của lớp <strong>cha</strong>,
                giúp giảm lặp code và tăng khả năng tái sử dụng.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Animal Inheritance</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`class Animal {
    void eat() {
        System.out.println("Đang ăn...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Gâu gâu!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Kế thừa từ Animal
        dog.bark();
    }
}`}</pre>
              </div>
            </div>
          </section>

          <section id="polymorphism" className="content-section">
            <h2 className="section-title">
              <span className="section-number">04</span>
              <span className="section-text">Tính đa hình (Polymorphism)</span>
            </h2>
            <div className="section-content">
              <p>
                Đa hình cho phép một hành động có thể được thực hiện theo nhiều cách khác nhau.
                Trong Java, nó được thể hiện qua <strong>ghi đè phương thức</strong> (method overriding).
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Polymorphism Example</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`class Animal {
    void sound() {
        System.out.println("Âm thanh chung");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meo meo");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myCat = new Cat();
        myCat.sound(); // Gọi phương thức được ghi đè
    }
}`}</pre>
              </div>
            </div>
          </section>

          <section id="encapsulation" className="content-section">
            <h2 className="section-title">
              <span className="section-number">05</span>
              <span className="section-text">Tính đóng gói (Encapsulation)</span>
            </h2>
            <div className="section-content">
              <p>
                Đóng gói giúp bảo vệ dữ liệu bên trong đối tượng bằng cách sử dụng các
                <strong>phạm vi truy cập</strong> (private, public, protected) và phương thức getter/setter.
              </p>
              
              <div className="code-example">
                <div className="code-header">
                  <span className="code-title">Account.java</span>
                  <span className="code-language">Java</span>
                </div>
                <pre className="code-block">{`public class Account {
    private double balance;

    public void setBalance(double amount) {
        if (amount > 0) balance = amount;
    }

    public double getBalance() {
        return balance;
    }
}`}</pre>
              </div>

              <div className="tip-box">
                <h4>💡 Tại sao cần Encapsulation?</h4>
                <p>Giúp kiểm soát quyền truy cập dữ liệu và đảm bảo tính toàn vẹn của object!</p>
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
                  <li>4 tính chất cơ bản của OOP trong Java</li>
                  <li>Cách tạo Class và Object</li>
                  <li>Kế thừa (Inheritance) và cách sử dụng</li>
                  <li>Đa hình (Polymorphism) qua method overriding</li>
                  <li>Đóng gói (Encapsulation) để bảo vệ dữ liệu</li>
                </ul>
              </div>
              
              <div className="next-steps">
                <h4>🚀 Bước tiếp theo:</h4>
                <p>
                  Bây giờ bạn đã hiểu các khái niệm OOP cơ bản. Hãy thực hành với
                  các design patterns, interfaces và abstract classes để nâng cao kỹ năng OOP!
                </p>
              </div>
            </div>
          </section>

          <div className="blog-navigation">
            <Link to="/blog/java1" className="nav-button back-button">
              <span className="nav-icon">←</span>
              <span>Java Basics</span>
            </Link>
            <Link to="/blog/java3" className="nav-button next-button">
              <span>Java Collections</span>
              <span className="nav-icon">→</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Java2;
