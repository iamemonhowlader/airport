import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <span className="logo-text">ELITE<span className="accent-dot">.</span>AIRPORT</span>
                    <p>Experience the ultimate in airport luxury. Our mission is to provide stress-free arrival and departure assistance at Dhaka's Hazrat Shahjalal International Airport.</p>
                    <div className="social-links">
                        <a href="#"><i className="ri-facebook-fill"></i></a>
                        <a href="#"><i className="ri-twitter-line"></i></a>
                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
                    </div>
                </div>
                
                <div className="footer-links">
                    <h4>Quick Access</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About Us</Link>
                    <Link to="/services/">Our Services</Link>
                    <Link to="/faq-2/">Frequently Asked</Link>
                </div>
                
                <div className="footer-links">
                    <h4>Service Highs</h4>
                    <Link to="/meet-greet-services/">Meet & Greet</Link>
                    <Link to="/car-service/">Fast Track DAC</Link>
                    <Link to="/services/">VIP Lounge</Link>
                    <Link to="/book-now/">Secure Booking</Link>
                </div>
                
                <div className="footer-contact">
                    <h4>Connect</h4>
                    <p><i className="ri-map-pin-line"></i> Departure Terminal 1, HSIA, Dhaka</p>
                    <p><i className="ri-phone-line"></i> +8801790754575</p>
                    <p><i className="ri-mail-line"></i> book@eliteairport.bd</p>
                    <div className="whatsapp-box">
                        <a href="https://wa.me/01790754575" className="btn-whatsapp">
                            <i className="ri-whatsapp-line"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container split-bottom">
                    <p>© 2025 Elite Airport Service BD. All Rights Reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
