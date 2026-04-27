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
        serviceDirection: '', // New: arrival/departure selection
        flightCode: '',
        date: '',
        time: '', // New: time selection
        etpSystem: false,
        guestCount: '1', // Default to 1
        email: '',
        uploadImage: null,
        comment: '',
        selectedPackage: '' // New: selected package
    });

    // Package data based on service direction
    const packages = {
        arrival: [
            {
                name: 'SILVER',
                price: { bdt: 'BDT 500', usd: 'USD 4.99' },
                description: 'From arrival pickup point up to immigration',
                features: ['Luggage Handling'],
                popular: false
            },
            {
                name: 'GOLD',
                price: { bdt: 'BDT 1000', usd: 'USD 8.99' },
                description: 'From on arrival immigration point up to arrival pickup point',
                features: ['Luggage Handling', 'Immigration assistance'],
                popular: true
            },
            {
                name: 'PLATINUM',
                price: { bdt: 'BDT 1500', usd: 'USD 12.99' },
                description: 'On arrival visa assistance and luggage handling',
                features: ['Luggage Handling', 'Immigration assistance', 'Visa assistance'],
                popular: false
            }
        ],
        departure: [
            {
                name: 'SILVER',
                price: { bdt: 'BDT 500', usd: 'USD 4.99' },
                description: 'From departure drop-off up to immigration',
                features: ['Luggage Handling'],
                popular: false
            },
            {
                name: 'GOLD',
                price: { bdt: 'BDT 1000', usd: 'USD 8.99' },
                description: 'From departure drop-off up to Boarding Bridge',
                features: ['Luggage Handling', 'Immigration assistance'],
                popular: true
            },
            {
                name: 'PLATINUM',
                price: { bdt: 'BDT 1500', usd: 'USD 12.99' },
                description: 'Domestic to international luggage assistance and vice versa',
                features: ['Luggage Handling', 'Immigration assistance', 'Special luggage support'],
                popular: false
            }
        ]
    };

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
                                    <label className="form-label">WhatsApp Number</label>
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
                                    <label className="form-label">Service Type</label>
                                    <select name="serviceType" className="form-select" required onChange={handleChange}>
                                        <option value="">—Please choose an option—</option>
                                        <option value="meet-greet">Meet & Greet Service</option>
                                        <option value="transit">Transit Assistance</option>
                                        <option value="vip">VIP Protocol Service</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Service Direction</label>
                                    <div className="service-direction-buttons">
                                        <button
                                            type="button"
                                            className={`direction-btn ${formData.serviceDirection === 'arrival' ? 'active' : ''}`}
                                            onClick={() => setFormData(prev => ({ ...prev, serviceDirection: 'arrival' }))}
                                        >
                                            Arrival
                                        </button>
                                        <button
                                            type="button"
                                            className={`direction-btn ${formData.serviceDirection === 'departure' ? 'active' : ''}`}
                                            onClick={() => setFormData(prev => ({ ...prev, serviceDirection: 'departure' }))}
                                        >
                                            Departure
                                        </button>
                                    </div>
                                </div>

                                {/* Package Display Section */}
                                {formData.serviceDirection && (
                                    <div className="form-group full-width">
                                        <div className="packages-section">
                                            <h3 className="packages-title">
                                                Our Packages<br />
                                                <span className="packages-subtitle">Tailored assistance for every type of traveler</span>
                                            </h3>
                                            <div className="packages-simple-list">
                                                {packages[formData.serviceDirection as keyof typeof packages].map((pkg, index) => (
                                                    <div key={index} className="package-simple-item">
                                                        <div className="package-simple-header">
                                                            <div className="package-simple-info">
                                                                <div className="package-simple-name-section">
                                                                    <input 
                                                                        type="radio" 
                                                                        id={`package-${pkg.name}`}
                                                                        name="package-selection"
                                                                        className="package-simple-radio"
                                                                        value={pkg.name}
                                                                        checked={formData.selectedPackage === pkg.name}
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                setFormData(prev => ({ ...prev, selectedPackage: pkg.name }));
                                                                            }
                                                                        }}
                                                                    />
                                                                    <label htmlFor={`package-${pkg.name}`} className="package-simple-name">
                                                                        {pkg.name}
                                                                        {pkg.popular && <span className="popular-text">Most Popular</span>}
                                                                    </label>
                                                                </div>
                                                                <div className="package-simple-prices">
                                                                    <div className="price-bdt">{pkg.price.bdt}</div>
                                                                    <div className="price-usd">{pkg.price.usd}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

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
                                    <label className="form-label">Flight Time</label>
                                    <input 
                                        type="time" 
                                        name="time" 
                                        className="form-input" 
                                        required 
                                        onChange={handleChange}
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label className="form-label">Number of Guests</label>
                                    <div className="guest-counter">
                                        <button
                                            type="button"
                                            className="counter-btn"
                                            onClick={() => {
                                                const currentCount = parseInt(formData.guestCount) || 1;
                                                if (currentCount > 1) {
                                                    setFormData(prev => ({ ...prev, guestCount: (currentCount - 1).toString() }));
                                                }
                                            }}
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            name="guestCount" 
                                            value={formData.guestCount}
                                            className="guest-count-input" 
                                            min="1"
                                            required 
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 99)) {
                                                    setFormData(prev => ({ ...prev, guestCount: value }));
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="counter-btn"
                                            onClick={() => {
                                                const currentCount = parseInt(formData.guestCount) || 1;
                                                if (currentCount < 99) {
                                                    setFormData(prev => ({ ...prev, guestCount: (currentCount + 1).toString() }));
                                                }
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
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
