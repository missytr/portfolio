import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Contact.css";

function Contact() {
  const { t } = useLanguage();
  const { contact: contactLocale } = t;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = contactLocale.errors.name;
    }
    if (!formData.email.trim()) {
      errors.email = contactLocale.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = contactLocale.errors.emailInvalid;
    }
    if (!formData.message.trim()) {
      errors.message = contactLocale.errors.message;
    } else if (formData.message.trim().length < 10) {
      errors.message = contactLocale.errors.messageMin;
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/missytr", label: "github.com/missytr" },
    { name: "Facebook", url: "https://facebook.com/linhtrankhanh.kh", label: "facebook.com/linhtrankhanh.kh" },
    { name: "Website", url: "https://missytr.github.io/portfolio/", label: "missytr.github.io" }
  ];

  return (
    <div className="contact-container">
      {/* Header */}
      <section className="contact-header-section">
        <span className="section-kicker">{contactLocale.kicker}</span>
        <h1 className="contact-main-heading">{contactLocale.heading}</h1>
        <p className="contact-lead">
          {contactLocale.lead}
        </p>
      </section>

      {/* Main Grid */}
      <section className="contact-layout-grid">
        {/* Left: Contact Info */}
        <div className="contact-channels-card">
          <div>
            <h2 className="card-box-heading">{contactLocale.channelsHeading}</h2>
            <p className="card-box-sub">{contactLocale.channelsSub}</p>

            <div className="methods-stack">
              {contactLocale.methods.map((m, index) => (
                <div key={index} className="method-row">
                  <span className="method-label">{m.title}</span>
                  <a
                    href={m.link}
                    className="method-anchor"
                    target={m.link.startsWith('http') ? '_blank' : '_self'}
                    rel={m.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {m.value}
                  </a>
                  <span className="method-note">{m.note}</span>
                </div>
              ))}
            </div>

            <div className="channels-divider"></div>

            <h3 className="social-subheading">{contactLocale.socialHeading}</h3>
            <div className="social-links-stack">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-anchor-row"
                >
                  <span className="social-platform-name">{s.name}</span>
                  <span className="social-platform-url">{s.label} →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact-Specific Policy */}
          <div className="contact-policy-box">
            <span className="policy-title">{contactLocale.policyTitle}</span>
            <ul className="policy-list">
              {contactLocale.policies.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Clean Contact Form */}
        <div className="contact-form-card">
          <div>
            <h2 className="card-box-heading">{contactLocale.formHeading}</h2>
            <p className="card-box-sub">{contactLocale.formSub}</p>

            <form onSubmit={handleSubmit} className="clean-form">
              <div className="input-field-group">
                <label htmlFor="name" className="field-label">{contactLocale.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={contactLocale.namePlaceholder}
                  className={`text-input ${formErrors.name ? 'error' : ''}`}
                  required
                />
                {formErrors.name && <span className="field-error-text">{formErrors.name}</span>}
              </div>

              <div className="input-field-group">
                <label htmlFor="email" className="field-label">{contactLocale.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={contactLocale.emailPlaceholder}
                  className={`text-input ${formErrors.email ? 'error' : ''}`}
                  required
                />
                {formErrors.email && <span className="field-error-text">{formErrors.email}</span>}
              </div>

              <div className="input-field-group">
                <label htmlFor="subject" className="field-label">{contactLocale.subjectLabel}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="text-input select-input"
                >
                  <option value="">{contactLocale.subjectDefault}</option>
                  <option value="job">{contactLocale.subjectJob}</option>
                  <option value="project">{contactLocale.subjectProject}</option>
                  <option value="consultation">{contactLocale.subjectConsult}</option>
                  <option value="other">{contactLocale.subjectOther}</option>
                </select>
              </div>

              <div className="input-field-group">
                <label htmlFor="message" className="field-label">{contactLocale.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={contactLocale.messagePlaceholder}
                  rows="6"
                  className={`text-input textarea-input ${formErrors.message ? 'error' : ''}`}
                  required
                ></textarea>
                {formErrors.message && <span className="field-error-text">{formErrors.message}</span>}
              </div>

              <button
                type="submit"
                className="submit-action-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? contactLocale.btnSubmitting : contactLocale.btnSubmit}
              </button>

              {submitStatus === 'success' && (
                <div className="alert-box alert-success">
                  {contactLocale.successAlert}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert-box alert-error">
                  {contactLocale.errorAlert}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;