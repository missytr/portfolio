import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/MainStyle.css";

function Header() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/projects", label: t.nav.projects },
    { path: "/cv", label: t.nav.cv },
    { path: "/contact", label: t.nav.contact }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`pro-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <div className="logo-monogram">KL</div>
            <div className="logo-content">
              <span className="logo-text">{language === 'en' ? 'Tran Khanh Linh' : 'Trần Khánh Linh'}</span>
              <span className="logo-subtitle">{t.header.role}</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          {/* Desktop Language Switcher */}
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              title="English"
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${language === 'vi' ? 'active' : ''}`}
              onClick={() => setLanguage('vi')}
              title="Tiếng Việt"
            >
              VI
            </button>
          </div>
        </nav>

        {/* Mobile Header Controls: Lang Switcher + Hamburger */}
        <div className="mobile-header-actions">
          <div className="lang-switcher lang-switcher-mobile">
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${language === 'vi' ? 'active' : ''}`}
              onClick={() => setLanguage('vi')}
            >
              VI
            </button>
          </div>

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
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
}

export default Header;