import React, { useState, useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:trankhanhlinh.lt@gmail.com",
      description: "Gửi email cho tôi"
    },
    {
      name: "GitHub",
      url: "https://github.com/trankhanlinh",
      description: "Xem mã nguồn dự án"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/trankhanhlinhdev",
      description: "Theo dõi trên Facebook"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/trankhanhlinhdev",
      description: "Xem ảnh và story"
    }
  ];

  const quickLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "CV", path: "/cv" },
    { name: "Dự án", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Liên hệ", path: "/contact" }
  ];

  const skills = ["React", "Node.js", "JavaScript", "TypeScript", "Python", "MongoDB"];

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-emoji">✨</span>
              </div>
              <div className="logo-content">
                <h3 className="brand-name">Trần Khánh Linh</h3>
                <p className="brand-subtitle">Full-Stack Developer</p>
              </div>
            </div>
            <p className="footer-description">
              Passionate about creating amazing web experiences with modern technologies. 
              Always learning, always building.
            </p>
            <div className="footer-skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Điều hướng</h4>
            <nav className="footer-nav">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path}
                  className="footer-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
         <div className="footer-section">
          <h4 className="section-title">Liên hệ</h4>
          <div className="contact-info">
            <div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>trankhanhlinhdev@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>(+84) 907 253 408</span>
              </div>
            </div>
          </div>
        </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="section-title">Kết nối</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.description}
                  style={{'--social-color': social.color}}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {currentYear} Trần Khánh Linh. Made with</span>
            <span className="heart">💛</span>
            <span>and lots of ☕</span>
          </div>
        </div>

      </div>

      {/* Background decoration */}
      <div className="footer-bg">
        <div className="golden-orb orb-1"></div>
        <div className="golden-orb orb-2"></div>
        <div className="golden-orb orb-3"></div>
      </div>
    </footer>
  );
}

export default Footer;
