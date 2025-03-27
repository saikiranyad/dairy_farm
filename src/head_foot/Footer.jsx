import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2 className="footer-logo">MyApp</h2>
          <p>
            Empowering businesses with innovative solutions. 
            Join us to explore more!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
