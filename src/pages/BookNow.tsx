import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countryCodes } from '../utils/countryCodes';
import { bookingService, type BookingData } from '../services/api';
import './BookNow.css';

const BookNow = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '+880',
        phoneNumber: '',
        country: '',
        serviceType: '',
        serviceDirection: '',
        flightCode: '',
        date: '',
        time: '',
        etpSystem: false,
        guestCount: '1',
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
        } else if (name === 'time') {
            // ✅ FIX: Typing-এর সময় শুধু valid characters (0-9 এবং :) allow করো
            // Final validation submit-এ হবে
            const partialTimeRegex = /^[0-9:]*$/;
            if (partialTimeRegex.test(value) && value.length <= 5) {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Submit-এ strict time validation
        const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(formData.time)) {
            alert('সঠিক সময় দাও (HH:MM format, যেমন: 09:30 বা 23:45)');
            return;
        }

        const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        try {
            const bookingData: BookingData = {
                full_name: formData.fullName,
                phone_number: `${formData.countryCode}${formData.phoneNumber}`,
                email: formData.email || undefined,
                service_type: formData.serviceType,
                flight_code: formData.flightCode,
                route: formData.serviceDirection || undefined,
                service_date: formData.date || undefined,
                flight_time: formData.time || undefined,
                guest_count: formData.guestCount || undefined,
                ticket_image: formData.uploadImage || undefined,
                comment: formData.comment || undefined,
            };

            const response = await bookingService.createBooking(bookingData);

            navigate('/booking-confirmation/', {
                state: { bookingData: response.data?.booking }
            });

        } catch (error) {
            console.error('Booking submission failed:', error);
            alert(`Booking submission failed: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
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
                                Don't let airport logistics stress you out. Whether you're arriving or departing Hazrat Shahjalal International Airport, our professional concierges are here to ensure your journey is seamless and comfortable.
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

                                <div className="form-group">
                                    <label className="form-label">Service Type</label>
                                    <select name="serviceType" className="form-select" required onChange={handleChange}>
                                        <option value="">—Please choose an option—</option>
                                        <option value="SILVER">SILVER Package</option>
                                        <option value="GOLD">GOLD Package</option>
                                        <option value="PLATINUM">PLATINUM Package</option>
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
                                    <label className="form-label">Flight Time (24-hour format)</label>
                                    <input
                                        type="text"
                                        name="time"
                                        className="form-input"
                                        required
                                        placeholder="HH:MM"
                                        // ✅ FIX: Correct regex — leading zero required (01-09, not 1-9)
                                        pattern="^([01][0-9]|2[0-3]):[0-5][0-9]$"
                                        onChange={handleChange}
                                        value={formData.time || ''}
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
                                    <label className="form-label">Passenger Image</label>
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