import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './BookingConfirmation.css';

interface BookingData {
  id: number;
  code: string;
  status: string;
  ticket_image_url?: string;
  created_at: string;
  flight_time?: string;
  service_date?: string;
  service_type?: string;
  flight_code?: string;
  full_name?: string;
  phone_number?: string;
  email?: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData: BookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/book-now');
    }
  }, [bookingData, navigate]);

  if (!bookingData) return null;

  // ✅ Safe date formatter (NO crash)
  const safeFormat = (date: Date) => {
    if (isNaN(date.getTime())) return '-';

    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // ✅ Format created_at
  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return safeFormat(new Date(dateString));
  };

  // ✅ MAIN FIX (handles all cases)
  const formatServiceDateTime = (date?: string, time?: string) => {
    if (!date) return '-';

    try {
      // Extract the YYYY-MM-DD part robustly from Laravel's ISO string or space-separated datetime
      const datePart = date.split('T')[0].split(' ')[0];

      if (datePart && time) {
        return safeFormat(new Date(`${datePart}T${time}`));
      }

      // Fallback if only date is available
      return safeFormat(new Date(date));

    } catch {
      return '-';
    }
  };

  return (
    <div className="confirmation-page animate-fade-up">
      <div className="container">
        <div className="confirmation-container">
          <div className="glass-card">

            {/* Success Icon */}
            <div className="success-icon">
              <div className="success-checkmark">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#10B981" fillOpacity="0.1"/>
                  <circle cx="40" cy="40" r="30" stroke="#10B981" strokeWidth="3" fill="none"/>
                  <path d="M25 40L35 50L55 30" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="confirmation-content">
              <h1 className="confirmation-title">Booking Confirmed!</h1>
              <p className="confirmation-message">
                Thank you for choosing our airport meet & greet service. Your booking has been successfully submitted and confirmed.
              </p>

              {/* Booking Details */}
              <div className="booking-details">
                <h2 className="details-title">Booking Details</h2>

                <div className="detail-grid">

                  <div className="detail-item">
                    <label className="detail-label">Booking Code</label>
                    <div className="detail-value booking-code">
                      {bookingData.code || '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Booking ID</label>
                    <div className="detail-value">
                      #{bookingData.id || '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Status</label>
                    <div className={`detail-value status ${bookingData.status}`}>
                      {bookingData.status
                        ? bookingData.status.charAt(0).toUpperCase() + bookingData.status.slice(1)
                        : '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Service Date & Time</label>
                    <div className="detail-value">
                      {formatServiceDateTime(
                        bookingData.service_date,
                        bookingData.flight_time
                      )}
                    </div>
                  </div>

                  {/* <div className="detail-item">
                    <label className="detail-label">Booking Created At</label>
                    <div className="detail-value">
                      {formatDate(bookingData.created_at)}
                    </div>
                  </div> */}

                  <div className="detail-item">
                    <label className="detail-label">Flight Code</label>
                    <div className="detail-value">
                      {bookingData.flight_code || '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Customer Name</label>
                    <div className="detail-value">
                      {bookingData.full_name || '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Phone</label>
                    <div className="detail-value">
                      {bookingData.phone_number || '-'}
                    </div>
                  </div>

                  <div className="detail-item">
                    <label className="detail-label">Email</label>
                    <div className="detail-value">
                      {bookingData.email || '-'}
                    </div>
                  </div>

                </div>
              </div>

              {/* Info */}
              <div className="important-info">
                <h3 className="info-title">Important Information</h3>
                <ul className="info-list">
                  <li>Please save your booking code for future reference</li>
                  <li>Our team will contact you shortly via WhatsApp or email</li>
                  <li>Please arrive at the airport at least 2 hours before your flight</li>
                  <li>Keep your passport and flight tickets ready</li>
                </ul>
              </div>

              {/* Action */}
              <div className="action-buttons">
                <button 
                  onClick={() => navigate('/book-now')}
                  className="btn btn-primary"
                >
                  Make Another Booking
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;