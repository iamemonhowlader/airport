import { useState } from 'react';
import { countryCodes } from '../utils/countryCodes';
import './BookNow.css';

const BookNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '+880',
        phoneNumber: '',
        country: '',
        serviceType: '',
        flightCode: '',
        destination: '',
        date: '',
        etpSystem: false,
        guestCount: '',
        email: '',
        uploadImage: null,
        comment: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        
        if (type === 'file' && target.files) {
            setFormData(prev => ({ ...prev, [name]: target.files![0] }));
        } else if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
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
                                src="/images/new3.png" 
                                alt="Airport Meet & Greet" 
                                className="booking-info-img"
                            />
                            <h2 className="booking-info-title gradient-text">Book Dhaka airport meet and greet</h2>
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
                                    <div className="phone-input-wrapper">
                                        <select 
                                            name="countryCode" 
                                            className="country-code-select" 
                                            value={formData.countryCode} 
                                            onChange={handleChange}
                                        >
                                            {countryCodes.map((item) => (
                                                <option key={item.iso} value={item.code}>
                                                    {item.iso} ({item.code})
                                                </option>
                                            ))}
                                        </select>
                                        <input 
                                            type="tel" 
                                            name="phoneNumber" 
                                            placeholder="0123456789" 
                                            className="form-input phone-main-input" 
                                            required 
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Country / Package Group</label>
                                    <select name="country" className="form-select" required onChange={handleChange}>
                                        <option value="">—Select Country Group—</option>
                                        <option value="arabian">Arabian</option>
                                        <option value="zipter">Zipter</option>
                                    </select>
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

                                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <input 
                                        type="checkbox" 
                                        name="etpSystem" 
                                        id="etpSystem"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="etpSystem" className="form-label" style={{ marginBottom: 0 }}>Add ETP System Option</label>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Number of Guests</label>
                                    <input 
                                        type="number" 
                                        name="guestCount" 
                                        placeholder="Enter guest count" 
                                        className="form-input" 
                                        min="1"
                                        required 
                                        onChange={handleChange}
                                    />
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
                                    <label className="form-label">Package Photo / Upload Ticket</label>
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
