import ReactCalendar from 'react-calendar';
import './css/AdminDashboard.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import CurrentUserContext from "../../../contexts/currentUserContext";


const AdminDashboard = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('currentUser')) {
            const sessionData = JSON.parse(sessionStorage.getItem('currentUser'));
            // console.table(sessionData);
            setCurrentUser(sessionData);
            return;
        }
        if (currentUser.password === '') {
            navigate('/');
        }
    }, []);
    
    // setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));



    // Define state variables for the selected date and events
    const [selectedDate, setSelectedDate] = useState(null);
    const [event, setEvent] = useState(null);
    const [events, setEvents] = useState(null);

    useEffect( 
        () => {
        fetch('/api/events')
            .then(result =>{return result.json()})
            .then(value =>{setEvents(value)});
        }, []);

    // Function to handle date selection
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
        for (let i=0; i<events.length; i++) {
        if (events[i].date === date.toDateString()){
            setEvent(events[i]);
            break;
        }else {
            setEvent(null);
        }
        }
    }
    
    return (
        <div>
            <div>
                <div>
                    <h1>Firstname: { currentUser.firstname }</h1>
                    <h1>Lastname: { currentUser.lastname }</h1>
                    <h1>Email: { currentUser.email }</h1>
                </div>
                <button className="adminDashButton" onClick={() => navigate('/admin/enrollment_applications')}>Enrollment Applications</button><br/>
                <button className="adminDashButton" onClick={() => navigate('/admin/student_accounts')}>Student Accounts</button><br/>
                <button className="adminDashButton" onClick={() => navigate('/admin/instructor_accounts')}>Instructor Accounts</button><br/>
                <button className="adminDashButton" onClick={() => navigate('/admin/administrator_accounts')}>Administrator Accounts</button><br/>
                <button className="adminDashButton" onClick={() => navigate('/admin/site_settings')}>Site Settings</button><br/>
            </div>
            <div className="centered-content">
                <ReactCalendar onChange={handleDateChange} value={selectedDate} />
                <div>
                {selectedDate && (
                    <p>Selected Date: {selectedDate.toDateString()}</p>
                )}
                {
                    <p>{event !== null ? `Event: ${event.event}` : ''}</p>
                }
                    
                </div>
            </div>
        </div>
    );
};


export default AdminDashboard;