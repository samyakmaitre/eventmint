import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import "../assets/styles/Footer.css";

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#gradient)" />
    <path d="M20 10L28 25H12L20 10Z" fill="white" />
    <circle cx="20" cy="28" r="3" fill="white" />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const SocialIcon = ({ icon: Icon, href, color }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="social-icon-inner"
      style={{ backgroundColor: color }}
    >
      <Icon size={20} />
    </motion.div>
  </a>
);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="accordion-content"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <motion.div 
              className="logo-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
              <h3 className="logo-text">BookMyShow</h3>
            </motion.div>
            <p className="tagline">Your gateway to entertainment!</p>
            <div className="social-icons">
              <SocialIcon icon={FaFacebookF} href="#" color="#1877f2" />
              <SocialIcon icon={FaTwitter} href="#" color="#1da1f2" />
              <SocialIcon icon={FaInstagram} href="#" color="#e4405f" />
              <SocialIcon icon={FaYoutube} href="#" color="#ff0000" />
              <SocialIcon icon={FaLinkedinIn} href="#" color="#0077b5" />
            </div>
          </div>

          <div className="footer-section">
            <Accordion title="Discover">
              <ul className="footer-list">
                <li><a href="#">Movies</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Plays</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Activities</a></li>
              </ul>
            </Accordion>
          </div>

          <div className="footer-section">
            <Accordion title="Help & Support">
              <ul className="footer-list">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </Accordion>
          </div>

          <div className="footer-section">
            <h5 className="section-title">Stay Connected</h5>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button 
                type="submit" 
                className="subscribe-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; 2024 BookMyShow. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="container footer-info-content">
          <div className="location">
            <FaLocationDot size={20} className="icon" />
            <span>Mumbai, India</span>
          </div>
          <div className="contact-info">
            <div className="phone">
              <FaPhone size={20} className="icon" />
              <span>1800-889-1999</span>
            </div>
            <div className="email">
              <MdEmail size={20} className="icon" />
              <span>support@BookMyShow.com</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;