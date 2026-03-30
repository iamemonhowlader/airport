import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`elite-header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="container nav-wrapper">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-main">ELITE<span className="accent-dot">.</span>AIRPORT</span>
                    </Link>
                </div>

                <ul className="nav-links desktop-only">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li className="has-dropdown">
                        <Link to="/services/">Services <i className="ri-arrow-down-s-line"></i></Link>
                        <div className="dropdown-menu glass-card">
                            <Link to="/meet-greet-services/">Meet & Greet</Link>
                            <Link to="/car-service/">Airport Transport</Link>
                        </div>
                    </li>
                    <li><Link to="/faq-2/">FAQ</Link></li>
                    <li><Link to="/contact-us/">Contact</Link></li>
                </ul>

                <div className="header-actions desktop-only">
                    <Link to="/book-now/" className="btn-primary-sm">Book Service</Link>
                </div>

                <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="drawer-links">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/about/" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/services/" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link to="/faq-2/" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                    <Link to="/contact-us/" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <Link to="/book-now/" className="btn-primary-mobile" onClick={() => setIsMobileMenuOpen(false)}>Secure Booking</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
