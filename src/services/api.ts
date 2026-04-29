const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api/v1';

export interface BookingData {
  full_name: string;
  phone_number: string;
  email?: string;
  service_type: string;
  flight_code: string;
  route?: string;
  service_date?: string;
  guest_count?: string;
  ticket_image?: File;
  comment?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data?: {
    booking: {
      id: number;
      code: string;
      status: string;
      ticket_image_url?: string;
      created_at: string;
    };
  };
}

export const bookingService = {
  async createBooking(bookingData: BookingData): Promise<BookingResponse> {
    const formData = new FormData();
    
    // Append all fields to FormData
    Object.entries(bookingData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (value instanceof File) {
          formData.append('ticket_image', value);
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit booking');
      }

      return result;
    } catch (error) {
      console.error('Booking submission error:', error);
      throw error;
    }
  }
};
