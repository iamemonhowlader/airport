import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            q: "What is the Airport Meet & Greet service?",
            a: "আমাদের Meet & Greet সেবার মাধ্যমে আপনি বিমানবন্দরে পৌঁছালে আমাদের দক্ষ কর্মীরা আপনাকে স্বাগত জানাবে এবং আপনার ইমিগ্রেশন, লাগেজ সংগ্রহ এবং কাস্টমসের সকল আনুষ্ঠানিকতা দ্রুত সম্পন্ন করতে সহায়তা করবে।",
            category: "General"
        },
        {
            q: "Is your service available 24/7?",
            a: "Yes, we are available 24 hours a day, 7 days a week. আমরা সপ্তাহে ৭ দিন ২৪ ঘণ্টা যাত্রীদের জন্য হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে নিয়োজিত রয়েছি।",
            category: "General"
        },
        {
            q: "How can I book your service?",
            a: "You can book directly via our 'Book Now' page or contact us on WhatsApp (+8801790754575). বুকিং করার জন্য আমাদের ওয়েবসাইট বা সরাসরি হোয়াটসঅ্যাপের মাধ্যমে যোগাযোগ করতে পারেন।",
            category: "Booking"
        },
        {
            q: "Do you provide Visa On Arrival (VOA) support?",
            a: "Yes, we provide full support for Visa On Arrival for foreign guests. আমরা বিদেশি যাত্রীদের ভিসা অন অ্যারাইভাল এবং অন্যান্য প্রয়োজনীয় সহায়তা প্রদান করি।",
            category: "Services"
        },
        {
            q: "How will I identify your staff at the airport?",
            a: "Our staff wear official uniforms and carry a personalized name board with your name. আমাদের প্রতিনিধিরা অফিশিয়াল ইউনিফর্মে আপনার নামের সাথে মিট-বোর্ড নিয়ে নির্দিষ্ট গেটে অপেক্ষা করবেন।",
            category: "Security"
        },
        {
            q: "Can you assist with heavy luggage?",
            a: "Absolutely. We provide dedicated assistance for baggage handling and secure transport to your vehicle. আমাদের কর্মীরা আপনার ভারী মালামাল সংগ্রহ ও তা গাড়ি পর্যন্ত পৌঁছে দেওয়ার পূর্ণ দায়িত্ব পালন করেন।",
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
                    <span className="hero-badge">Help Center | সহায়তা কেন্দ্র</span>
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
                            <a href="https://wa.me/8801790754575" className="contact-item">
                                <i className="ri-whatsapp-line"></i> Chat with Expert
                            </a>
                            <a href="tel:+8801790754575" className="contact-item mt-10">
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
