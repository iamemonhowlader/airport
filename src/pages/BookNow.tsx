import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        serviceType: '',
        flightCode: '',
        destination: '',
        date: '',
        guestCount: '',
        email: '',
        uploadImage: null,
        comment: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;
        
        if (type === 'file' && target.files) {
            setFormData(prev => ({ ...prev, [name]: target.files![0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking Data:', formData);
        alert('Thank you! Your booking request has been submitted. We will contact you shortly.');
    };

    return (
        <div className="booking-page animate-fade-up">
            <div className="container">
                <div className="booking-container">
                    {/* Sticky Info Panel */}
                    <div className="booking-info">
                        <div className="glass-card">
                            <img 
                                src="/images/meet_greet_booking.png" 
                                alt="Airport Meet & Greet" 
                                className="booking-info-img"
                            />
                            <h2 className="booking-info-title gradient-text">Book Your Meet & Greet Service</h2>
                            <p className="booking-info-text">
                                Don't let airport logistics stress you out. Whether you’re arriving or departing Hazrat Shahjalal International Airport, our professional concierges are here to ensure your journey is seamless and comfortable.
                            </p>
                            <div className="benefit-checklist" style={{ display: 'grid', gap: '0.75rem', color: 'var(--text-muted)' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>⭐ VIP Lounge Access Options</div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>⭐ Fast-track Immigration Assistance</div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>⭐ Luggage Handling Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="booking-form-wrapper">
                        <div className="glass-card">
                            <form onSubmit={handleSubmit} className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        placeholder="Enter your name" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phoneNumber" 
                                        placeholder="Ex: +880123456789" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Service Type</label>
                                    <select name="serviceType" className="form-select" required onChange={handleChange}>
                                        <option value="">—Please choose an option—</option>
                                        <option value="arrival">Arrival Meet & Greet</option>
                                        <option value="departure">Departure Meet & Greet</option>
                                        <option value="transit">Transit Assistance</option>
                                        <option value="vip">VIP Protocol Service</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Flight Code No</label>
                                    <input 
                                        type="text" 
                                        name="flightCode" 
                                        placeholder="Ex: EK582 or QR638" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Destination / Source</label>
                                    <select name="destination" className="form-select" required onChange={handleChange}>
                                        <option value="">—Please choose an option—</option>
                                        <option value="airport_to_hotel">Dhaka Airport to Hotel</option>
                                        <option value="hotel_to_airport">Hotel to Dhaka Airport</option>
                                        <option value="airport_to_home">Dhaka Airport to Home</option>
                                        <option value="intercity">Intercity Transfer</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Booking Date</label>
                                    <input 
                                        type="date" 
                                        name="date" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Number of Guests</label>
                                    <select name="guestCount" className="form-select" required onChange={handleChange}>
                                        <option value="">—Please choose an option—</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Persons</option>
                                        <option value="3-5">3-5 Persons</option>
                                        <option value="6plus">6+ Persons</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">E-mail Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter your E-mail" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Upload Image / Ticket</label>
                                    <input 
                                        type="file" 
                                        name="uploadImage" 
                                        className="form-input" 
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label className="form-label">Special Requests / Comments</label>
                                    <textarea 
                                        name="comment" 
                                        placeholder="Write your comment here..." 
                                        className="form-textarea"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="form-group full-width">
                                    <button type="submit" className="form-submit-btn">Complete My Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
