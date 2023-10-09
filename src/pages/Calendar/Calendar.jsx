import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import NavBar from '../../components/NavBar';
import './css/Calendar.css';

const Calendar = () => {
  // Define state variables for the selected date and events
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can add additional logic here, such as fetching events for the selected date.
  };

  return (
    <>
      <NavBar />
      <div className="calendar-container">
        <div className="centered-content">
          <ReactCalendar onChange={handleDateChange} value={selectedDate} />
          <div>
            {selectedDate && (
              <p>Selected Date: {selectedDate.toDateString()}</p>
            )}
            {/* You can render events or other calendar-related content here */}
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Calendar;