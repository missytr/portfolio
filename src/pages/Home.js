import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = useMemo(() => [
    "CREATIVE SOFTWARE ENGINEER",
    "PASSIONATE DEVELOPER", 
    "UI/UX DESIGNER",
    "PROBLEM SOLVER"
  ], []);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, texts]);

  return (
    <section className="hero-section modern-hero">
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text-section">
            <h1 className="hero-name">
              <span className="name-part">TRẦN</span>
              <span className="name-highlight">KHÁNH LINH</span>
            </h1>
            
            <div className="hero-title">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Tôi tạo ra những trải nghiệm số đẹp mắt và có ý nghĩa. 
              Kết hợp giữa kỹ thuật và nghệ thuật để mang lại giải pháp sáng tạo.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">
                <span>Khám phá về tôi</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>

          </div>

          {/* Visual Section */}
          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-ring"></div>
              <div className="profile-image">
                <div className="avatar-placeholder">
                  <span>KL</span>
                </div>
              </div>
              <div className="profile-dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;