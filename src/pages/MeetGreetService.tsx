
import './Services.css';

const MeetGreetService = () => {
    return (
        <div className="services-modern">
            {/* Hero */}
            <section className="services-hero">
                <div className="container text-center animate-fade-up">
                    <span className="hero-badge">Our Services | আমাদের সেবাসমূহ</span>
                    <h1 className="hero-title">Premier Airport Excellence <br/><span className="accent-text">At Dhaka (DAC)</span></h1>
                    <p className="hero-subtitle">Experience the pinnacle of airport hospitality with our end-to-end meet and greet services at Hazrat Shahjalal International Airport.</p>
                </div>
            </section>

            {/* Core Split Sections (Departure) */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container split-layout reverse">
                    <div className="feature-content reveal-left">
                        <span className="step-num">01. Service Focus</span>
                        <h2 className="section-title">Departure <span className="accent-text">Assistance</span></h2>
                        <h3 className="bengali-title">বর্হিগমন সহায়তা (Departure Service)</h3>
                        <p className="description-text">
                            Starting your journey shouldn't be stressful. We receive you at the gate, handle all baggage scanning, perform airline check-in formalities, and accompany you to the immigration gate.
                        </p>
                        <ul className="feature-list">
                            <li><i className="ri-checkbox-circle-fill"></i> নির্দিষ্ট গেটে অভ্যর্থনা ও সহায়তা</li>
                            <li><i className="ri-checkbox-circle-fill"></i> মালামাল সংগ্রহ ও সিকিউরিটি স্ক্যান সম্পন্ন করা</li>
                            <li><i className="ri-checkbox-circle-fill"></i> এয়ারলাইন্স চেক-ইন ও মালামাল বুকিং সহায়তা</li>
                            <li><i className="ri-checkbox-circle-fill"></i> ইমিগ্রেশন গেট পর্যন্ত নিরবচ্ছিন্ন সহায়তা</li>
                        </ul>
                        <a href="/book-now/" className="btn-primary mt-30">Book Departure Help</a>
                    </div>
                    <div className="feature-image reveal-right">
                        <div className="glass-frame">
                            <img src="/departure_service_assist_1774860040434.png" alt="Departure Assistance Dhaka" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Split Sections (Arrival) */}
            <section className="section-padding bg-light overflow-hidden">
                <div className="container split-layout">
                    <div className="feature-image reveal-left">
                        <div className="glass-frame">
                            <img src="https://images.unsplash.com/photo-1544006659-f0b21f04cb1b?q=80&w=2070&auto=format&fit=crop" alt="Arrival Support Dhaka" />
                        </div>
                    </div>
                    <div className="feature-content reveal-right">
                        <span className="step-num">02. Service Focus</span>
                        <h2 className="section-title">Arrival <span className="accent-text">Hospitality</span></h2>
                        <h3 className="bengali-title">আগমনী সহায়তা (Arrival Service)</h3>
                        <p className="description-text">
                            Arriving in Dhaka? We greet you at the immigration or boarding bridge, collect your luggage from the belt, and handle customs formalities until we load your bags into your vehicle.
                        </p>
                        <ul className="feature-list">
                            <li><i className="ri-checkbox-circle-fill"></i> ইমিগ্রেশন বা বোডিং ব্রিজ থেকে অভ্যর্থনা</li>
                            <li><i className="ri-checkbox-circle-fill"></i> নির্দিষ্ট বেল্ট থেকে মালামাল সংগ্রহ</li>
                            <li><i className="ri-checkbox-circle-fill"></i> কাস্টম আনুষ্ঠানিকতা শেষ করা</li>
                            <li><i className="ri-checkbox-circle-fill"></i> গাড়ি পাকিং/গাড়ী পর্যন্ত ব্যাগ পৌঁছে দেওয়া</li>
                        </ul>
                        <a href="/book-now/" className="btn-outline">Pre-Book Arrival Help</a>
                    </div>
                </div>
            </section>

             {/* VIP & Specialized Services */}
             <section className="section-padding bg-dark-deep">
                <div className="container">
                    <div className="text-center mb-60">
                        <h2 className="white-text">Elite <span className="accent-text">VIP Facilities</span></h2>
                        <p className="white-faded">Exclusive specialized services for the discerning traveler</p>
                    </div>

                    <div className="grid-3 gap-30">
                        {/* Lounge */}
                        <div className="service-card-luxury glass-card dark-card">
                            <div className="luxury-icon">🛋️</div>
                            <h3>Executive Lounge Entry</h3>
                            <p>Access the 5-star Balaka Lounge. Enjoy buffet meals, relax, and use high-speed WiFi before your flight.</p>
                            <span className="bengali-label">লাউঞ্জ সুবিধা - বুফে এবং বিশ্রাম</span>
                        </div>
                        
                        {/* VOA */}
                        <div className="service-card-luxury glass-card dark-card active-border">
                            <div className="luxury-icon">🛂</div>
                            <h3>Visa On Arrival (VOA)</h3>
                            <p>We facilitate the VOA process for foreign guests, ensuring a fast and error-free legal entry into Bangladesh.</p>
                            <span className="bengali-label">বিদেশি যাত্রীদের জন্য ভিসা সহায়তা</span>
                        </div>

                        {/* Car Service */}
                        <div className="service-card-luxury glass-card dark-card">
                            <div className="luxury-icon">🚘</div>
                            <h3>Airport Transfer</h3>
                            <p>Domestic to International transfer or luxury vehicle transport to your hotel/residence in Dhaka.</p>
                            <span className="bengali-label">নিরাপদ এয়ারপোর্ট ট্রান্সফার সুবিধা</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Service Grid (The 10 points) */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title">Our Service <span className="accent-text">Portfolio</span></h2>
                        <p className="description-text">Everything you need for a smooth terminal experience</p>
                    </div>
                    <div className="grid-4 service-portfolio-grid">
                        <div className="mini-card glass-card">
                            <div className="m-icon">🏢</div>
                            <h4>Hotel Booking</h4>
                            <p>3, 4, or 5-star domestic and international hotel reservations tailored to your budget.</p>
                        </div>
                        <div className="mini-card glass-card">
                            <div className="m-icon">🎫</div>
                            <h4>Discounted Ticketing</h4>
                            <p>Get exclusive rates on all domestic and international air tickets in no time.</p>
                        </div>
                        <div className="mini-card glass-card">
                            <div className="m-icon">🔒</div>
                            <h4>Safe Custody</h4>
                            <p>Safekeeping of your valuables and documents in our secure airport facility during your travel.</p>
                        </div>
                        <div className="mini-card glass-card">
                            <div className="m-icon">🖨️</div>
                            <h4>Document Services</h4>
                            <p>Last-minute printing or scanning of travel documents, VISAs, or business files at the airport.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Contact */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="cta-banner-services glass-card glow-gold">
                        <div className="cta-header flex-center-between">
                            <div className="text-side">
                                <h2>Have a Specialized Request?</h2>
                                <p>Our 60+ member team is standing by to assist with medical, corporate, or group requirements.</p>
                            </div>
                            <div className="btn-side">
                                <a href="tel:+8801790754575" className="btn-luxury">
                                    <i className="ri-phone-fill"></i> Call Expert Assistance
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MeetGreetService;
