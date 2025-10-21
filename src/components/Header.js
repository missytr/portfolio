import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/MainStyle.css";

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Trang chủ"},
    { path: "/about", label: "Giới thiệu"},
    { path: "/cv", label: "CV"},
    { path: "/projects", label: "Dự án"},
    { path: "/blog", label: "Chia sẻ"},
    { path: "/contact", label: "Liên hệ"}
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header pro-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <span className="logo-emoji">✨</span>
            </div>
            <div className="logo-content">
              <span className="logo-text">Trần Khánh Linh</span>
              <span className="logo-subtitle">Frontend Developer</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu pro-nav desktop-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <span className="nav-text">{item.label}</span>
              <div className="nav-glow"></div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span className="mobile-nav-text">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;