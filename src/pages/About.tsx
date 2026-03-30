import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-modern">
            {/* Minimal Hero */}
            <section className="about-hero">
                <div className="container text-center animate-fade-up">
                    <span className="hero-badge">About Us | আমাদের সম্পর্কে</span>
                    <h1 className="hero-title">Trusted Partners in Your <br/><span className="accent-text">Dhaka Journey</span></h1>
                    <p className="hero-subtitle">Airport Help Service BD হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকায় যাত্রীদের জন্য নির্ভরযোগ্য Meet & Greet Service এবং Airport Assistance প্রদান করে।</p>
                </div>
            </section>

            {/* Who We Are & Mission */}
            <section className="section-padding bg-white">
                <div className="container split-layout">
                    <div className="about-image glass-card">
                        <img src="/dhaka_airport_exterior_1774859652325.png" alt="Hazrat Shahjalal International Airport Dhaka" />
                        <div className="image-overlay-badge">
                            <span className="years">EST. 2020</span>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">Our <span className="accent-text">Mission & Vision</span></h2>
                        <p className="description-text">
                            We believe every journey should be stress-free, comfortable, and secure. Our vision is to be the most trusted Dhaka Airport Meet & Greet Service Provider in Bangladesh, always standing by passengers with professional assistance.
                        </p>
                        <p className="description-text bengali-text">
                            আমাদের মূল উদ্দেশ্য হলো যাত্রীদের বিমানবন্দরের ভ্রমণকে সহজ, নিরাপদ ও ঝামেলামুক্ত করা। আমরা সপ্তাহে ৭ দিন ২৪ ঘন্টা যাত্রীদের জন্য রয়েছি।
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
                        <p className="text-center subtitle-bengali">আমরা যাত্রীদেরকে হযরত শাহজালাল আর্ন্তজাতিক বিমান বন্দরে নিম্নের সেবা দিয়ে থাকি:</p>
                    </div>

                    <div className="services-grid-10">
                        {/* 1. Departure */}
                        <div className="service-detail-card glass-card">
                            <div className="num">01</div>
                            <div className="icon">🛫</div>
                            <h3>Departure Service</h3>
                            <p className="bengali-desc">বর্হিগমন যাত্রীদেরকে আমরা নির্দ্দিষ্ট গেটে অভ্যর্থনা ও সহায়তা প্রদান। চেক-ইন আনুষ্ঠানিকতা ও মালামাল বুকি শেষ করে ইমিগ্রেশন গেট পর্যন্ত পৌঁছে দিব।</p>
                        </div>

                        {/* 2. Arrival */}
                        <div className="service-detail-card glass-card">
                            <div className="num">02</div>
                            <div className="icon">🛬</div>
                            <h3>Arrival Service</h3>
                            <p className="bengali-desc">ইমিগ্রেশন থেকে অভ্যর্থনা ও সহায়তা প্রদান (ভি আই পি দেরকে বোডিং ব্রিজ) মালামালা সংগ্রহ করে কাষ্টমস আনুষ্ঠানিকতা শেষ করে গাড়ী পর্যন্ত পৌঁছে দিব।</p>
                        </div>

                        {/* 3. Transfer */}
                        <div className="service-detail-card glass-card">
                            <div className="num">03</div>
                            <div className="icon">🚗</div>
                            <h3>Airport Transfer</h3>
                            <p className="bengali-desc">International to Domestic OR Domestic to International Transfer. নিরাপদে যাত্রীদের গন্তব্যস্থানে (হোটেল / বাসা) পৌঁছে দেব।</p>
                        </div>

                        {/* 4. VOA */}
                        <div className="service-detail-card glass-card">
                            <div className="num">04</div>
                            <div className="icon">🛂</div>
                            <h3>Visa On Arrival (VOA)</h3>
                            <p className="bengali-desc">বিদেশি যাত্রীদের যদি বাংলাদেশী ভিসা প্রয়োজন হয়, তাহলে আমরা Visa on arrival করে গাড়ি পর্যন্ত পৌঁছে দিব।</p>
                        </div>

                        {/* 5. Hotel */}
                        <div className="service-detail-card glass-card">
                            <div className="num">05</div>
                            <div className="icon">🏩</div>
                            <h3>Hotel Booking</h3>
                            <p className="bengali-desc">আপনার চাহিদানুযায়ী দেশের বাহিরে ও ভিতরে যে কোন মানের (৫, ৪, ৩*) হোটেল বুকিং করতে পারেন।</p>
                        </div>

                         {/* 6. Ticketing */}
                         <div className="service-detail-card glass-card">
                            <div className="num">06</div>
                            <div className="icon">🎫</div>
                            <h3>Air Ticketing</h3>
                            <p className="bengali-desc">অভ্যন্তরীণ ও আর্ন্তজাতিক বিমান টিকেট ডিসকাউন্টসহ স্বল্প সময়ে ক্রয় করতে পারেন।</p>
                        </div>

                        {/* 7. WiFi & Lounge */}
                        <div className="service-detail-card glass-card">
                            <div className="num">07</div>
                            <div className="icon">🌐</div>
                            <h3>WiFi & Paid Lounge</h3>
                            <p className="bengali-desc">খাওয়াদাওয়া ও বিশ্রামের জন্য পেইড লাউঞ্জ এবং Free WiFi Access সুবিধা।</p>
                        </div>

                        {/* 8. Safekeeping */}
                        <div className="service-detail-card glass-card">
                            <div className="num">08</div>
                            <div className="icon">🔒</div>
                            <h3>Safekeeping Values</h3>
                            <p className="bengali-desc">মূল্যবান মালামাল সামগ্রী নির্দ্দিষ্ট সময়ের জন্য আমাদের সেফ অফিসে সংরক্ষন করতে পারবেন।</p>
                        </div>

                         {/* 9. Documents */}
                         <div className="service-detail-card glass-card">
                            <div className="num">09</div>
                            <div className="icon">🖨️</div>
                            <h3>Print Documents</h3>
                            <p className="bengali-desc">যাত্রী কোনো জরুরি ডকুমেন্টস প্রিন্ট করতে চাইলে তা এখানে করতে পারবেন।</p>
                        </div>

                        {/* 10. Balaka Entry */}
                        <div className="service-detail-card glass-card">
                            <div className="num">10</div>
                            <div className="icon">🛋️</div>
                            <h3>Lounge Entry</h3>
                            <p className="bengali-desc">বলাকা এক্সিকিউটিভ লাউঞ্জে (৫ স্টার) স্বল্প খরচে বিশ্রাম। বুফে, স্ন্যাকস, চা ও কফি সুবিধা।</p>
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
                            <p>আমাদের টিমে রয়েছে দক্ষ ও আন্তরিক ৫০ থেকে ৬০ জন স্টাফ যারা প্রতিদিন শত শত যাত্রীকে সেবা দিচ্ছে।</p>
                        </div>
                        <div className="choose-card glass-card dark-card active-pillar">
                            <div className="check-icon">✓</div>
                            <h3>24/7 Assistance</h3>
                            <p>ভ্রমণের প্রতিটি ধাপে আপনাকে সহায়তা করাই আমাদের প্রতিশ্রুতি। দিন-রাত ২৪ ঘণ্টা আমরা পাশে আছি।</p>
                        </div>
                        <div className="choose-card glass-card dark-card">
                            <div className="check-icon">✓</div>
                            <h3>Competitive Charges</h3>
                            <p>স্বল্প খরচে উন্নত মানের ও নির্ভরযোগ্য সেবা নিশ্চিত করাই আমাদের একমাত্র লক্ষ্য।</p>
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
                            <p>বর্তমানে আমরা হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকায় সেবা প্রদান করছি।</p>
                        </div>
                        <a href="https://wa.me/8801790754575" className="btn-whatsapp-large" target="_blank">
                            <i className="ri-whatsapp-line"></i> Contact via WhatsApp
                        </a>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default About;
