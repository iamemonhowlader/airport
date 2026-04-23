import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-modern">
            {/* Hero Section */}
            <section className="premium-hero">
                <div className="container hero-container">
                    <div className="hero-content animate-fade-up">
                        <span className="hero-badge">Award-Winning Airport Services</span>
                        <h1 className="hero-title">
                            Dhaka airport <br /> 
                            <span className="accent-text">meet and greet</span>
                        </h1>
                        <p className="hero-subtitle">
                            Skip the queues and experience stress-free travel. Our professional team handles your 
                            immigration, baggage, and transfers with VIP precision.
                        </p>
                        <div className="hero-actions">
                            <Link to="/book-now/" className="btn-accent">Book Now</Link>
                            <a href="https://wa.me/8801325172266" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <i className="ri-whatsapp-line"></i> WhatsApp Us
                            </a>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-card glass-card">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-card glass-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="section-padding services-section">
                <div className="container text-center mb-50">
                    <h2 className="section-title">Our <span className="accent-text">Packages</span></h2>
                    <p className="section-subtitle">Tailored assistance for every type of traveler</p>
                </div>
                <div className="container grid-3">
                    <div className="service-card glass-card">
                        <div className="service-icon">✈️</div>
                        <h3>Departure Service</h3>
                        <p>End-to-end assistance from the terminal gate to your boarding gate.</p>
                        <Link to="/meet-greet-services/" className="service-link">View Details →</Link>
                    </div>
                    <div className="service-card glass-card highlight-card">
                        <div className="service-icon">🚕</div>
                        <h3>VIP Transfers</h3>
                        <p>Luxury car pickups and drops with professional chauffeurs.</p>
                        <Link to="/car-service/" className="service-link">Explore Cars →</Link>
                    </div>
                    <div className="service-card glass-card">
                        <div className="service-icon">🏨</div>
                        <h3>Lounge Access</h3>
                        <p>Relax in the finest airport lounges while we handle your paperwork.</p>
                        <Link to="/services/" className="service-link">Learn More →</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-dark-deep why-us">
                <div className="container split-layout">
                    <div className="why-us-content">
                        <h2 className="white-text">Why Experience <br /> Airport Help Service?</h2>
                        <ul className="why-us-list">
                            <li>
                                <span className="check">✓</span>
                                <div>
                                    <h4>Priority Fast Track</h4>
                                    <p>Bypass long immigration lines with dedicated assistance.</p>
                                </div>
                            </li>
                            <li>
                                <span className="check">✓</span>
                                <div>
                                    <h4>Luggage Assistance</h4>
                                    <p>Our porters take care of your heavy bags from start to finish.</p>
                                </div>
                            </li>
                            <li>
                                <span className="check">✓</span>
                                <div>
                                    <h4>Multilingual Staff</h4>
                                    <p>Friendly staff speaking English, Bengali, and more.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="why-us-image">
                       <img src="/images/new.png" alt="VIP Airport Support" />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding pricing-section">
                <div className="container text-center mb-50">
                    <h2 className="section-title">Our Packages <span className="accent-text">(Starting From)</span></h2>
                </div>
                <div className="container grid-3">
                    <div className="pricing-card glass-card">
                        <div className="pricing-header">
                            <span className="price-tag">BDT 500 / USD 4.99</span>
                            <h3>SILVER</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>From departure drop-off up to immigration or after immigration up to arrival pickup point</li>
                            <li>Luggage Handling</li>
                            <li>Per Person</li>
                        </ul>
                        <Link to="/book-now/" className="btn-primary w-100 d-block text-center">Book Now</Link>
                    </div>
                    <div className="pricing-card glass-card featured-pricing">
                        <div className="premium-label">Most Popular</div>
                        <div className="pricing-header">
                            <span className="price-tag">BDT 1000 / USD 8.99</span>
                            <h3>GOLD</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>From departure drop-off up to Boarding Bridge or from on arrival immigration point up to arrival pickup point</li>
                            <li>Luggage Handling</li>
                            <li>Immigration assistance</li>
                            <li>Per Person</li>
                        </ul>
                        <Link to="/book-now/" className="btn-accent w-100 d-block text-center">Book Now</Link>
                    </div>
                    <div className="pricing-card glass-card">
                        <div className="pricing-header">
                            <span className="price-tag">BDT 1500 / USD 12.99</span>
                            <h3>PLATINUM</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>On arrival visa assistance</li>
                            <li>Domestics to international luggage assistance and vise versa</li>
                            <li>Luggage Handling</li>
                            <li>Per Person</li>
                        </ul>
                        <Link to="/book-now/" className="btn-primary w-100 d-block text-center">Book Now</Link>
                    </div>
                </div>
            </section>

             {/* Booking CTA */}
             <section className="section-padding booking-cta">
                <div className="container text-center">
                    <div className="cta-box glass-card animate-fade-up">
                        <h2>Ready for a Stress-Free Journey?</h2>
                        <p>Book your elite airport experience in less than 2 minutes.</p>
                        <Link to="/book-now/" className="btn-accent btn-large">Confirm Your Arrival Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
