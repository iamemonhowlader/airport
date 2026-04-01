import { useState } from 'react';
import './CarService.css';

const CarService = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const vehicles = [
        {
            title: "Sedan Car",
            capacity: "1-3 Passengers",
            img: "/images/sedan.png",
            description: "Perfect for couples or small families. Reliable, air-conditioned, and fuel-efficient for city and airport runs."
        },
        {
            title: "Microbus",
            capacity: "6-8 Passengers",
            img: "/images/microbus.png",
            description: "Ideal for groups with luggage. Offers ample space and a smooth ride to and from the airport."
        },
        {
            title: "Luxury VIP Car",
            capacity: "Premium Experience",
            img: "/images/vip_car.png",
            description: "Exquisite transportation for VIPs, executives, and special guests. High-end comfort and discretion."
        }
    ];

    const benefits = [
        { icon: "📅", title: "24/7 Booking", text: "Round-the-clock availability for bookings anytime you need." },
        { icon: "⏱️", title: "On-time Service", text: "We prioritize punctuality to ensure you never miss a flight or appointment." },
        { icon: "🤵", title: "Polite Drivers", text: "Experienced and courteous professionals who know all Dhaka routes." },
        { icon: "👋", title: "Meet & Greet", text: "Personalized welcome at the arrivals hall with a name placard." },
        { icon: "🛡️", title: "Safe Travel", text: "Clean vehicles and safe driving for a stress-free experience." },
        { icon: "❄️", title: "Pure Comfort", text: "All vehicles are fully air-conditioned and meticulously cleaned." }
    ];

    const faqs = [
        {
            q: "How can I book a car?",
            a: "Booking is simple! You can book directly through our website by providing your flight details, pickup time, and destination. We will confirm your booking immediately."
        },
        {
            q: "Will the driver receive me at the airport?",
            a: "Yes, our Meet & Greet service is standard. A professional driver will monitor your flight status and be waiting in the arrivals hall with a placard showing your name."
        },
        {
            q: "Do you provide 24/7 car service?",
            a: "Absolutely. We understand that flights arrive at all hours, so our car service and support team are available 24 hours a day, 7 days a week."
        },
        {
            q: "Do you have special cars for VIP passengers?",
            a: "Yes, we have a dedicated fleet of luxury vehicles and specialized VIP services for high-profile guests, executives, and CIP travelers."
        }
    ];

    return (
        <div className="car-service-page">
            <section className="car-service-hero animate-fade-up">
                <div className="container">
                    <div className="hero-badge">Verified Service</div>
                    <h1 className="gradient-text">🚗 Airport Transfer & Car Service in Dhaka</h1>
                    <p>Airport Help Service Bangladesh provides the most reliable, safe, and premium Airport Transfer & Car Service in Dhaka for international and domestic passengers.</p>
                    <a href="/book-now/" className="btn-accent">Book Your Ride Now</a>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛫 Our Premium Transfer Services</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto' }}>Our car service is not limited to the airport — we provide transportation anywhere in Bangladesh.</p>
                    </div>

                    <div className="services-grid">
                        <div className="glass-card service-card">
                            <h3>🏨 Hotel Transfers</h3>
                            <p>Direct transportation from Hazrat Shahjalal International Airport (DAC) to any hotel in Dhaka or vice versa.</p>
                        </div>
                        <div className="glass-card service-card">
                            <h3>🏠 Home Transfers</h3>
                            <p>Convenient and safe rides to your doorstep anywhere in Dhaka city limits and surrounding areas.</p>
                        </div>
                        <div className="glass-card service-card">
                            <h3>🛣️ Intercity Travel</h3>
                            <p>Premium long-distance transfers from Dhaka to Chittagong, Sylhet, Cox’s Bazar, and other major cities.</p>
                        </div>
                        <div className="glass-card service-card">
                            <h3>👔 Corporate VIP</h3>
                            <p>Specialized luxury transport solutions for corporate clients and VIP delegations visiting Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '3rem' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>🚘 Vehicles We Provide</h2>
                        <p>A diverse fleet to match every passenger requirement.</p>
                    </div>

                    <div className="vehicle-showcase">
                        {vehicles.map((v, i) => (
                            <div key={i} className="vehicle-card glass-card">
                                <div className="vehicle-img-wrapper">
                                    <img src={v.img} alt={v.title} />
                                </div>
                                <div className="vehicle-info">
                                    <h4>{v.title}</h4>
                                    <div className="capacity">👥 {v.capacity}</div>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{v.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white" style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>⭐ Why Choose Our Car Service?</h2>
                    <div className="benefit-list">
                        {benefits.map((b, i) => (
                            <div key={i} className="benefit-item">
                                <div className="benefit-icon" style={{ color: 'var(--primary)' }}>{b.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{b.title}</h4>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{b.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="detailed-text animate-fade-up">
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Your Reliable Ride to and From Dhaka Airport</h2>
                        <p>
                            Touching down in a new city should be exciting, not stressful. But we know the moment you step out of Dhaka Airport, the hunt for a trustworthy taxi begins. The haggling over fares, the worry about the driver’s route, the uncertainty of the vehicle’s condition—it can sour the start of your trip before it even begins.
                        </p>
                        <p>
                            That’s where we come in. Think of us as your personal ground transport solution. We offer a reliable, pre-booked airport car service in Dhaka designed to give you one less thing to worry about. Our goal is simple: to provide a safe, comfortable, and hassle-free Dhaka airport transfer directly to your doorstep.
                        </p>

                        <div className="section-padding">
                            <h3 style={{ textAlign: 'center' }}>How It Works: Your Easy, Three-Step Journey</h3>
                            <div className="how-it-works-steps" style={{ marginTop: '3rem' }}>
                                <div className="step-card glass-card">
                                    <span className="step-number">01</span>
                                    <h4>Book Your Ride</h4>
                                    <p>Simply tell us your flight details, drop-off address, and the number of passengers. You’ll receive a confirmed price immediately—no hidden fees.</p>
                                </div>
                                <div className="step-card glass-card">
                                    <span className="step-number">02</span>
                                    <h4>We Meet You</h4>
                                    <p>Our professional driver will monitor your flight and be waiting for you in the arrivals hall, holding a sign with your name. No searching, no confusion.</p>
                                </div>
                                <div className="step-card glass-card">
                                    <span className="step-number">03</span>
                                    <h4>Relax and Go</h4>
                                    <p>Your driver will assist with your luggage and take you directly to your final destination in our clean, air-conditioned vehicle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-padding">
                            <h3 style={{ textAlign: 'center' }}>Why Travelers Choose Our Car Service</h3>
                            <p>
                                We’re more than just a ride. We are a seamless part of your travel experience. Whether you need a comfortable sedan for a business trip or a spacious van for your family, our fleet is ready. For those seeking a more premium experience, our VIP car service at Dhaka airport offers luxury vehicles for a truly special arrival or departure.
                            </p>
                            <p>
                                We understand that trust is built on reliability. Our drivers are experienced, courteous, and know the best routes across the city. With fixed pricing, flight tracking, and a commitment to punctuality, we take the uncertainty out of your airport transportation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="faq-section" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="gradient-text text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>FAQ ❓</h2>
                        <div className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                                        {faq.q}
                                        <span>{openFaq === index ? '−' : '+'}</span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="faq-answer animate-fade-up">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="booking-strip glass-card" style={{ marginTop: '5rem', background: 'var(--primary)', color: 'var(--white)' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Ready for a stress-free ride?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>Book your confirmed airport transfer with us today and experience a smooth start to your journey in Bangladesh.</p>
                        <a href="/book-now/" className="btn-accent" style={{ background: 'var(--white)', color: 'var(--primary)' }}>Book Premium Car Service</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarService;
