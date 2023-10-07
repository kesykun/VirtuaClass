import React, { useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import './css/Calendar.css';

const Calendar = () => {
  // Define state variables for the selected date and events
  const [selectedDate, setSelectedDate] = useState(null);
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect( 
    () => {
      fetch('/api/events')
        .then(result =>{return result.json()})
        .then(value =>{setEvents(value)});
    }, []
  )

  // Function to handle date selection
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    for (let i=0; i<events.length; i++) {
      if (events[i].date === date.toDateString()){
        setEvent(events[i]);
      }
    }
    console.log(typeof events[0].date);
    console.log(typeof date.toDateString());
    
    // You can add additional logic here, such as fetching events for the selected date.
  };

  return (
    <div className="calendar-container">
      <div className="centered-content">
        <ReactCalendar onChange={handleDateChange} value={selectedDate} />
        <div>
          {selectedDate && (
            <p>Selected Date: {selectedDate.toDateString()}</p>
          )}
            <h1>Event: {event !== null ? event.date : ''}</h1>
            <button onClick={() => console.log(event !== null ? event.date : event)}>Event lol</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;