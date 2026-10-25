import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Footer.css";

function Footer() {
  const { language, t } = useLanguage();
  const { footer: footerLocale, nav: navLocale } = t;
  const [currentYear] = useState(new Date().getFullYear());

  const quickLinks = [
    { path: "/", label: navLocale.home },
    { path: "/about", label: navLocale.about },
    { path: "/projects", label: navLocale.projects },
    { path: "/cv", label: navLocale.cv },
    { path: "/contact", label: navLocale.contact }
  ];

  const candidateName = language === 'en' ? "Tran Khanh Linh" : "Trần Khánh Linh";

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">{candidateName}</div>
            <div className="footer-brand-role">{t.header.role}</div>
            <p className="footer-bio">
              {footerLocale.bio}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{footerLocale.navHeading}</h4>
            <ul className="footer-nav-list">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">{footerLocale.contactHeading}</h4>
            <div className="footer-contact-details">
              <div className="contact-line">
                <span className="contact-label">Email:</span>
                <a href="mailto:trankhanhlinh.lt@gmail.com" className="contact-value-link">
                  trankhanhlinh.lt@gmail.com
                </a>
              </div>
              <div className="contact-line">
                <span className="contact-label">{language === 'en' ? 'Phone:' : 'Điện thoại:'}</span>
                <a href="tel:+84907253408" className="contact-value-link">
                  (+84) 907 253 408
                </a>
              </div>
              <div className="contact-line">
                <span className="contact-label">{language === 'en' ? 'Location:' : 'Địa điểm:'}</span>
                <span className="contact-value">{t.about.profile.location}</span>
              </div>
            </div>
          </div>

          {/* Connect Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{footerLocale.connectHeading}</h4>
            <div className="footer-platform-links">
              <a
                href="https://github.com/missytr"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                GitHub Profile
              </a>
              <a
                href="https://missytr.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                Website Portfolio
              </a>
              <a
                href="https://facebook.com/linhtrankhanh.kh"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {currentYear} {candidateName}. {footerLocale.rights}
          </p>
          <p className="footer-note">
            {footerLocale.techNote}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
