import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            q: "What is the Airport Meet & Greet service?",
            a: "With our Meet & Greet service, our skilled staff will welcome you upon arrival at the airport and assist you in completing all immigration, luggage collection, and customs formalities quickly.",
            category: "General"
        },
        {
            q: "Is your service available 24/7?",
            a: "Yes, we are available 24 hours a day, 7 days a week. We are dedicated to serving passengers at Hazrat Shahjalal International Airport 24/7.",
            category: "General"
        },
        {
            q: "How can I book your service?",
            a: "You can book directly via our 'Book Now' page or contact us on WhatsApp (+8801325172266). You can contact us through our website or directly via WhatsApp for booking.",
            category: "Booking"
        },
        {
            q: "Do you provide Visa On Arrival (VOA) support?",
            a: "Yes, we provide full support for Visa On Arrival for foreign guests. We provide Visa On Arrival and other necessary assistance for foreign passengers.",
            category: "Services"
        },
        {
            q: "How will I identify your staff at the airport?",
            a: "Our staff wear official uniforms and carry a personalized name board with your name. Our representatives will be waiting at the designated gate in official uniforms with a meet-board with your name.",
            category: "Security"
        },
        {
            q: "Can you assist with heavy luggage?",
            a: "Absolutely. We provide dedicated assistance for baggage handling and secure transport to your vehicle. Our staff take full responsibility for collecting your heavy luggage and delivering it to the car.",
            category: "Services"
        }
    ];

    const toggle = (i: number) => {
        if (active === i) return setActive(null);
        setActive(i);
    };

    return (
        <div className="faq-modern">
            {/* Hero */}
            <section className="faq-hero">
                <div className="container text-center animate-fade-up">
                    <span className="hero-badge">Help Center</span>
                    <h1 className="hero-title">Common <span className="accent-text">Questions</span></h1>
                    <p className="hero-subtitle">Everything you need to know about our premium airport services in Dhaka.</p>
                </div>
            </section>

            {/* Main FAQ Content */}
            <section className="section-padding bg-white">
                <div className="container accordion-container">
                    <div className="faq-wrapper">
                        {faqs.map((item, i) => (
                            <div key={i} className={`faq-item glass-card ${active === i ? 'active' : ''}`} onClick={() => toggle(i)}>
                                <div className="faq-question">
                                    <span className="cat-badge">{item.category}</span>
                                    <h3>{item.q}</h3>
                                    <span className="toggle-icon">{active === i ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="faq-contact-box glass-card glow-gold">
                        <h3>Still Have Questions?</h3>
                        <p>If you can't find what you're looking for, our 24/7 team is ready to talk.</p>
                        <div className="contact-links-faq">
                            <a href="https://wa.me/8801325172266" className="contact-item">
                                <i className="ri-whatsapp-line"></i> Chat with Expert
                            </a>
                            <a href="tel:+8801325172266" className="contact-item mt-10">
                                <i className="ri-phone-fill"></i> Voice Assistance
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Trust Banner */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="trust-grid-mini text-center">
                        <div className="trust-mini-card">
                            <i className="ri-shield-user-fill"></i>
                            <p>Verified Personnel</p>
                        </div>
                        <div className="trust-mini-card">
                            <i className="ri-customer-service-2-fill"></i>
                            <p>24/7 Support</p>
                        </div>
                        <div className="trust-mini-card">
                            <i className="ri-lock-2-fill"></i>
                            <p>Secure Assistance</p>
                        </div>
                        <div className="trust-mini-card">
                            <i className="ri-verified-badge-fill"></i>
                            <p>100% Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
