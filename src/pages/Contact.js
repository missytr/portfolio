import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Vui lòng nhập họ và tên';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email không hợp lệ';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Vui lòng nhập tin nhắn';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Tin nhắn quá ngắn (tối thiểu 10 ký tự)';
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    // Simulate form submission with more realistic timing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'trankhanh.linh@gmail.com',
      link: 'mailto:trankhanh.linh@gmail.com',
      description: 'Gửi email cho tôi',
      available: '24/7'
    },
    {
      icon: '📱',
      title: 'Điện thoại',
      value: '+84 123 456 789',
      link: 'tel:+84123456789',
      description: 'Gọi điện trực tiếp',
      available: '9:00 - 18:00'
    },
    {
      icon: '📍',
      title: 'Địa chỉ',
      value: 'TP. Hồ Chí Minh, Việt Nam',
      link: 'https://maps.google.com/?q=Ho+Chi+Minh+City',
      description: 'Vị trí hiện tại',
      available: 'GMT+7'
    },
    {
      icon: '💬',
      title: 'Zalo/WhatsApp',
      value: '+84 123 456 789',
      link: 'https://zalo.me/84123456789',
      description: 'Chat trực tiếp',
      available: 'Online'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/username',
      color: '#333',
      description: 'Mã nguồn dự án'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/username',
      color: '#0077b5',
      description: 'Mạng nghề nghiệp'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com/username',
      color: '#1877f2',
      description: 'Trang cá nhân'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/username',
      color: '#e4405f',
      description: 'Ảnh & Story'
    }
  ];

  const skills = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript', 
    'Python', 'Java', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">Liên hệ với tôi</span>
              <span className="title-sub">Let's Build Something Amazing Together</span>
            </h1>
            <p className="hero-description">
              Có ý tưởng dự án? Muốn hợp tác? Hoặc đơn giản chỉ muốn trò chuyện về công nghệ? 
              Tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!
            </p>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="contact-main">
        <div className="contact-container">
          <div className={`contact-grid ${isLoaded ? 'loaded' : ''}`}>
            
            {/* Contact Info Section */}
            <div className="contact-info">
              <div className="info-header">
                <h2>Thông tin liên hệ</h2>
                <p>Nhiều cách để kết nối với tôi</p>
              </div>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <h4>{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="method-link"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                      <p>{info.description}</p>
                      <span className="availability">{info.available}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h3>Theo dõi tôi</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${social.name} - ${social.description}`}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <div className="social-info">
                        <span className="social-name">{social.name}</span>
                        <span className="social-desc">{social.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


              {/* About Me Section */}
              <div className="about-preview">
                <div className="about-content">
                  <h3>Trần Khánh Linh</h3>
                  <p className="role">Full-Stack Developer</p>
                  <p className="bio">
                    Đam mê công nghệ, thích khám phá và sáng tạo. 
                    Chuyên về React, Node.js và AI/ML.
                  </p>
                  
                  <div className="skills-preview">
                    <p className="skills-title">Kỹ năng chính:</p>
                    <div className="skills-tags">
                      {skills.slice(0, 4).map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/about" className="view-profile">
                    Xem hồ sơ đầy đủ →
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Gửi tin nhắn</h2>
                <p>Tôi sẽ phản hồi trong vòng 24 giờ</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên của bạn"
                    className={formErrors.name ? 'error' : ''}
                    required
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={formErrors.email ? 'error' : ''}
                    required
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="project">🚀 Hợp tác dự án</option>
                    <option value="job">💼 Cơ hội việc làm</option>
                    <option value="consultation">💡 Tư vấn kỹ thuật</option>
                    <option value="freelance">✨ Freelance Project</option>
                    <option value="mentoring">🎓 Mentoring/Coaching</option>
                    <option value="other">🤝 Khác</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tin nhắn *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Chia sẻ ý tưởng, dự án hoặc bất kỳ điều gì bạn muốn thảo luận...

                      Ví dụ:
                      - Mô tả chi tiết về dự án
                      - Timeline và budget mong muốn  
                      - Công nghệ yêu cầu
                      - Mục tiêu cần đạt được"
                    rows="8"
                    className={formErrors.message ? 'error' : ''}
                    required
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  <div className="char-count">
                    {formData.message.length}/500 ký tự
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn-icon loading">⏳</span>
                      <span>Đang gửi...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span className="btn-icon">✅</span>
                      <span>Đã gửi thành công!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <span className="btn-icon">❌</span>
                      <span>Gửi thất bại, thử lại</span>
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">📧</span>
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <p>✨ Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi trong vòng 24 giờ.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message-box">
                    <p>❌ Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;