import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, Train, Ticket, CheckCircle, AlertCircle } from 'lucide-react';
import BookingForm from './BookingForm';
import Question_three from './Question_three';

const BookingCard = ({ scheduleData, onBookingSuccess }) => {

const [bookingData, setBookingData] = useState(() => {
    // Get next hour time and today's date
    const now = new Date();
    now.setHours(now.getHours() + 1);
    now.setMinutes(0);
    now.setSeconds(0);
    
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });

    const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD format

    return {
      time: timeString,
      date: dateString,
      adult_count: 1,
      children_count: 0,
      schedule_id: scheduleData?.id,
      class_id: 1,
      railcar_id: scheduleData?.train?.id,
      seats: []
    };
  });
  
  const [isLoading, setIsLoading] = useState(false);
const [bookingStatus, setBookingStatus] = useState(null);
const [apiError, setApiError] = useState({
  code: null,
  message: null,
  errors: null
});
const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0)

  // Generate seat options (simplified for demo)
  const generateSeats = () => {
    const seats = [];
    for (let i = 1; i <= 20; i++) {
      seats.push({ id: i, number: i, available: Math.random() > 0.3 });
    }
    return seats;
  };

  const [availableSeats] = useState(generateSeats());

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSeatSelection = (seatId) => {
    const seat = availableSeats.find(s => s.id === seatId);
    if (!seat.available) return;

    const totalPassengers = bookingData.adult_count + bookingData.children_count;
    
    setSelectedSeats(prev => {
      const isSelected = prev.includes(seatId);
      let newSeats;
      
      if (isSelected) {
        newSeats = prev.filter(id => id !== seatId);
      } else if (prev.length < totalPassengers) {
        newSeats = [...prev, seatId];
      } else {
        newSeats = [...prev.slice(1), seatId];
      }
      
      setBookingData(prevData => ({
        ...prevData,
        seats: newSeats
      }));
      
      return newSeats;
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setBookingStatus(null);

    // Reset error states
    setApiError({
      code: null,
      message: null,
      errors: null
    });
    
    try {
      const authToken = localStorage.getItem("authToken");
      
      // Prepare form data
      const formData = new FormData();
      formData.append('time', bookingData.time);
      formData.append('date', bookingData.date);
      formData.append('adult_count', bookingData.adult_count);
      formData.append('children_count', bookingData.children_count);
      formData.append('schedule_id', bookingData.schedule_id);
      formData.append('class_id', bookingData.class_id);
      formData.append('railcar_id', bookingData.railcar_id);
      
      // Add seats
      selectedSeats.forEach((seat, index) => {
        formData.append(`seats[${index}]`, seat);
      });

      const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/bookings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Accept': 'application/json'
        },
        body: formData
      });

      const result = await response.json();
      
      if (response.ok && result.code === 'success') {
        setBookingStatus({ type: 'success', message: 'Booking confirmed successfully!' });
        setBookingConfirmation(result.data.booking);
        
        // Call the success callback with the booking data and advance to next step
        if (onBookingSuccess && typeof onBookingSuccess === 'function') {
          onBookingSuccess(result.data.booking);
        }
        setCurrentStep(0); // Reset step for next time
      } else {
        // Handle API error response
        setApiError({
          code: result.code,
          message: result.message,
          errors: result.errors
        });
        setBookingStatus({ 
          type: 'error', 
          message: result.errors?.errors || result.message || 'Booking failed. Please try again.' 
        });
      }
    } catch (error) {
      setApiError({
        code: 'error',
        message: 'network_error',
        errors: { errors: 'Network error. Please check your connection.' }
      });
      setBookingStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  const totalPassengers = bookingData.adult_count + bookingData.children_count;

  return (
    <div className="p-4">
      <div className="mx-auto">
        <div className="grid  gap-8">

          {/* Booking Form */}
          <div className="rounded-2xl shadow-xl p-6">
            
            <div className="space-y-4">
              
              {currentStep === 0 ? (
                <>
                  <BookingForm 
                    bookingData={bookingData} 
                    scheduleData={scheduleData} 
                    handleInputChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center"
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <Question_three
                      id={scheduleData?.id}
                      numberOfSeats={totalPassengers}
                      onSeatSelect={(seats) => {
                        setSelectedSeats(seats);
                        setBookingData(prev => ({ ...prev, seats }));
                      }}
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(0)}
                      className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 transition-all duration-200 flex items-center justify-center"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading || selectedSeats.length !== totalPassengers}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Ticket className="w-5 h-5 mr-2" />
                          Book Now
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}

              {/* Status Messages */}
              {bookingStatus && (
                <div className={`p-4 rounded-lg ${
                  bookingStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    {bookingStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    {bookingStatus.message}
                  </div>
                  
                  {/* API Error Details */}
                  {apiError.code === 'error' && apiError.errors && (
                    <div className="mt-2 ml-7 text-sm">
                      {Object.entries(apiError.errors).map(([key, value]) => (
                        <div key={key} className="text-red-700">
                          • {value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
