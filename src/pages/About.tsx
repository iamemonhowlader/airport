
import './About.css';

const About = () => {
    return (
        <div className="about-modern">
            {/* Minimal Hero */}
            <section className="about-hero">
                <div className="container text-center animate-fade-up">
                    <span className="hero-badge">About Us</span>
                    <h1 className="hero-title">Trusted Partners in Your <br/><span className="accent-text">Dhaka Journey</span></h1>
                    <p className="hero-subtitle">Dhaka airport meet and greet provides reliable Meet & Greet Service and Airport Assistance at Hazrat Shahjalal International Airport, Dhaka.</p>
                </div>
            </section>

            {/* Who We Are & Mission */}
            <section className="section-padding bg-white">
                <div className="container split-layout">
                    <div className="about-image glass-card">
                        <img src="/images/new2.png" alt="Hazrat Shahjalal International Airport Dhaka" />
                        <div className="image-overlay-badge">
                            <span className="years">EST. 2020</span>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">Our <span className="accent-text">Mission & Vision</span></h2>
                        <p className="description-text">
                            We believe every journey should be stress-free, comfortable, and secure. Our vision is to be the most trusted Dhaka Airport Meet & Greet Service Provider in Bangladesh, always standing by passengers with professional assistance.
                        </p>
                        <p className="description-text">
                            Our main goal is to make passenger airport travel easy, safe and hassle-free. We are available 24/7 for passengers.
                        </p>
                        <div className="stat-grid">
                            <div className="mini-stat">
                                <span className="val">50+</span>
                                <span className="lbl">Professional Staff Members</span>
                            </div>
                            <div className="mini-stat">
                                <span className="val">24/7</span>
                                <span className="lbl">Continuous Airport Assistance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Deep Dive */}
            <section className="section-padding services-detail bg-light">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title text-center">Comprehensive <span className="accent-text">Airport Services</span></h2>
                        <p className="text-center subtitle-english">We provide the following services at Hazrat Shahjalal International Airport:</p>
                    </div>

                    <div className="services-grid-10">
                        {/* 1. Departure */}
                        <div className="service-detail-card glass-card">
                            <div className="num">01</div>
                            <div className="icon">🛫</div>
                            <h3>Departure Service</h3>
                            <p className="service-desc">We provide reception and assistance at designated gates for departing passengers. We will complete check-in formalities and luggage booking and escort you to the immigration gate.</p>
                        </div>

                        {/* 2. Arrival */}
                        <div className="service-detail-card glass-card">
                            <div className="num">02</div>
                            <div className="icon">🛬</div>
                            <h3>Arrival Service</h3>
                            <p className="service-desc">Reception and assistance from immigration (boarding bridge for VIPs). We will collect luggage, complete customs formalities and escort you to the car.</p>
                        </div>

                        {/* 3. Transfer */}
                        <div className="service-detail-card glass-card">
                            <div className="num">03</div>
                            <div className="icon">🚗</div>
                            <h3>Airport Transfer</h3>
                            <p className="service-desc">International to Domestic OR Domestic to International Transfer. We will safely deliver passengers to their destination (hotel/home).</p>
                        </div>

                        {/* 4. VOA */}
                        <div className="service-detail-card glass-card">
                            <div className="num">04</div>
                            <div className="icon">🛂</div>
                            <h3>Visa On Arrival (VOA)</h3>
                            <p className="service-desc">If foreign passengers need a Bangladeshi visa, we will assist with Visa on arrival and escort them to the car.</p>
                        </div>

                        {/* 5. Hotel */}
                        <div className="service-detail-card glass-card">
                            <div className="num">05</div>
                            <div className="icon">🏩</div>
                            <h3>Hotel Booking</h3>
                            <p className="service-desc">You can book any quality (5, 4, 3*) hotel outside and inside the country according to your needs.</p>
                        </div>

                         {/* 6. Ticketing */}
                         <div className="service-detail-card glass-card">
                            <div className="num">06</div>
                            <div className="icon">🎫</div>
                            <h3>Air Ticketing</h3>
                            <p className="service-desc">You can purchase domestic and international air tickets in a short time with discounts.</p>
                        </div>

                        {/* 7. WiFi & Lounge */}
                        <div className="service-detail-card glass-card">
                            <div className="num">07</div>
                            <div className="icon">🌐</div>
                            <h3>WiFi & Paid Lounge</h3>
                            <p className="service-desc">Paid lounge for dining and rest and Free WiFi Access facility.</p>
                        </div>

                        {/* 8. Safekeeping */}
                        <div className="service-detail-card glass-card">
                            <div className="num">08</div>
                            <div className="icon">🔒</div>
                            <h3>Safekeeping Values</h3>
                            <p className="service-desc">Valuable items can be stored in our safe office for a specified period.</p>
                        </div>

                         {/* 9. Documents */}
                         <div className="service-detail-card glass-card">
                            <div className="num">09</div>
                            <div className="icon">🖨️</div>
                            <h3>Print Documents</h3>
                            <p className="service-desc">If a passenger wants to print any emergency documents, they can do it here.</p>
                        </div>

                        {/* 10. Balaka Entry */}
                        <div className="service-detail-card glass-card">
                            <div className="num">10</div>
                            <div className="icon">🛋️</div>
                            <h3>Lounge Entry</h3>
                            <p className="service-desc">Rest at Balaka Executive Lounge (5 star) at low cost. Buffet, snacks, tea and coffee facilities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-dark-deep">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="white-text">Why Choose <span className="accent-text">Elite Airport Service?</span></h2>
                        <p className="white-faded">Passenger safety is our top priority</p>
                    </div>
                    <div className="grid-3 animate-fade-up">
                        <div className="choose-card glass-card dark-card">
                            <div className="check-icon">✓</div>
                            <h3>Experienced & Trained</h3>
                            <p>Our team consists of 50 to 60 skilled and cordial staff who serve hundreds of passengers every day.</p>
                        </div>
                        <div className="choose-card glass-card dark-card active-pillar">
                            <div className="check-icon">✓</div>
                            <h3>24/7 Assistance</h3>
                            <p>Our commitment is to assist you at every step of your journey. We are by your side 24 hours a day.</p>
                        </div>
                        <div className="choose-card glass-card dark-card">
                            <div className="check-icon">✓</div>
                            <h3>Competitive Charges</h3>
                            <p>Our only goal is to ensure high quality and reliable service at low cost.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="about-cta section-padding">
                <div className="container">
                   <div className="cta-banner glass-card GlowBorder">
                        <div className="cta-text">
                            <h3>Ready to Travel Stress-Free?</h3>
                            <p>Currently we are providing services at Hazrat Shahjalal International Airport, Dhaka.</p>
                        </div>
                        <a href="https://wa.me/8801325172266" className="btn-whatsapp-large" target="_blank">
                            <i className="ri-whatsapp-line"></i> Contact via WhatsApp
                        </a>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default About;
