import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Message Sent Successfully! We will get back to you shortly.');
        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <div className="contact-page animate-fade-up">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <span className="hero-badge" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>Contact Us | যোগাযোগ করুন</span>
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '4rem' }}>We Are Here <span className="gradient-text hero-accent">To Assist You</span></h1>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="contact-layout">
                        {/* Information Section */}
                        <div className="contact-info-card glass-card">
                            <h3 className="section-title" style={{ marginBottom: '2rem' }}>Get In <span className="accent-text">Touch</span></h3>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-detail">
                                    <h4>Our Office</h4>
                                    <p>Hazrat Shahjalal International Airport, Dhaka, Bangladesh</p>
                                    <p className="bengali-text">হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div className="contact-detail">
                                    <h4>Phone Number</h4>
                                    <a href="tel:+8801790754575">+8801790-754575</a><br/>
                                    <a href="tel:+8801970754575">+8801970-754575</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>
                                <div className="contact-detail">
                                    <h4>Email Support</h4>
                                    <a href="mailto:info@airporthelpservicebd.com">info@airporthelpservicebd.com</a><br/>
                                    <a href="mailto:airporthelpservicebd@gmail.com">airporthelpservicebd@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">💬</div>
                                <div className="contact-detail">
                                    <h4>24/7 WhatsApp</h4>
                                    <a href="https://wa.me/8801790754575" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="contact-form-card glass-card">
                            <h3 className="section-title" style={{ marginBottom: '2rem' }}>Send Us A <span className="accent-text">Message</span></h3>
                            <form onSubmit={handleSubmit} className="contact-form-grid">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" placeholder="Your Name" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" placeholder="Your Email" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" placeholder="Your Phone" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <select className="form-select" required>
                                        <option value="">Choose Subject</option>
                                        <option value="arrival">Arrival Service</option>
                                        <option value="departure">Departure Service</option>
                                        <option value="car">Car Service</option>
                                        <option value="other">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group full-span">
                                    <label className="form-label">Message</label>
                                    <textarea placeholder="Write your message here..." className="form-textarea" required></textarea>
                                </div>
                                <div className="full-span">
                                    <button type="submit" className="btn-accent" style={{ width: '100%' }}>Send Message Now</button>
                                </div>
                                {status && <div className="full-span" style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>{status}</div>}
                            </form>
                        </div>
                    </div>

                    <div className="contact-map-wrapper">
                        {/* Embedded Google Map for Hazrat Shahjalal International Airport */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d14602.730308354832!2d90.3951333!3d23.8433444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c414c995ef15%3A0xc3ce1e51322d7ae6!2sHazrat%20Shahjalal%20International%20Airport!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hazrat Shahjalal International Airport Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
