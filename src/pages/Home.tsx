import React from 'react';
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
                            Elite <span className="accent-text">Meet & Greet</span> <br /> 
                            At Dhaka Airport
                        </h1>
                        <p className="hero-subtitle">
                            Skip the queues and experience stress-free travel. Our professional team handles your 
                            immigration, baggage, and transfers with VIP precision.
                        </p>
                        <div className="hero-actions">
                            <Link to="/book-now/" className="btn-accent">Book Now</Link>
                            <Link to="/services/" className="btn-outline">Our Services</Link>
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
                    <h2 className="section-title">Our Premium <span className="accent-text">Services</span></h2>
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
                       <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" alt="VIP Airport Support" />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding pricing-section">
                <div className="container text-center mb-50">
                    <h2 className="section-title">Transparent <span className="accent-text">Pricing</span></h2>
                </div>
                <div className="container grid-3">
                    <div className="pricing-card glass-card">
                        <div className="pricing-header">
                            <span className="price-tag">৳3,500</span>
                            <h3>Standard</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>Meet at Terminal</li>
                            <li>Fast Track Immigration</li>
                            <li>Baggage Assistance</li>
                            <li className="faded">Lounge Access</li>
                        </ul>
                        <button className="btn-primary w-100">Select Plan</button>
                    </div>
                    <div className="pricing-card glass-card featured-pricing">
                        <div className="premium-label">Most Popular</div>
                        <div className="pricing-header">
                            <span className="price-tag">৳5,500</span>
                            <h3>Premium Plus</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>Meet at Gate</li>
                            <li>Fast Track Immigration</li>
                            <li>Full Baggage Porter</li>
                            <li>VIP Lounge Service</li>
                        </ul>
                        <button className="btn-accent w-100">Select Plan</button>
                    </div>
                    <div className="pricing-card glass-card">
                        <div className="pricing-header">
                            <span className="price-tag">Custom</span>
                            <h3>Group / VIP</h3>
                        </div>
                        <ul className="pricing-features">
                            <li>Dedicated Account Manager</li>
                            <li>Multiple Family Members</li>
                            <li>Private Transfer</li>
                            <li>Exclusive Concierge</li>
                        </ul>
                        <button className="btn-primary w-100">Contact Us</button>
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
