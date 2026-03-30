import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-wrapper">
          <span className="logo-text">ELITE<span className="accent-dot">.</span>AIRPORT</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about/" className="nav-link">About</Link>
          <div className="nav-dropdown">
            <Link to="/services/" className="nav-link">Services <span className="chevron-down">▾</span></Link>
            <div className="dropdown-menu">
              <Link to="/car-service/" className="dropdown-item">Car Service</Link>
              <Link to="/meet-greet-services/" className="dropdown-item">Meet & Greet</Link>
            </div>
          </div>
          <Link to="/faq-2/" className="nav-link">FAQ</Link>
          <Link to="/contact-us/" className="nav-link btn-header">Contact Us</Link>
        </nav>

        {/* Hamburger - Mobile */}
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'toggle-active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about/" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services/" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/faq-2/" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
          <Link to="/contact-us/" className="btn-mobile" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
