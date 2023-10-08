import { useState, useEffect } from "react";
import './css/SiteSettings.css';
import { useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';

const SiteSettings = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('currentUser')) {
            const sessionData = JSON.parse(sessionStorage.getItem('currentUser'));
            console.table(sessionData);
            setCurrentUser(sessionData);
            return;
        }
        if (currentUser.password === '') {
            navigate('/');
        }
    }, []);

    const [schoolName, setSchoolName] = useState("")
    const [mission, setMission] = useState("")
    const [vision, setVision] = useState("")
    const [objectives, setObjectives] = useState("")
    const [paymentLink, setPaymentLink] = useState("")
    const [contactInformation, setContactInformation] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await fetch('/api/school', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id: "6522a9f6d6ccb019a109d58b",
                    schoolName: schoolName,
                    mission: mission,
                    vision: vision,
                    objectives: objectives,
                    paymentLink: paymentLink,
                    contactInformation: contactInformation
                }
            ),
            redirect: "follow"
        })
        window.location.reload();
        alert("School Information Updated!");
    }



    // calendar shit
    const [selectedDate, setSelectedDate] = useState(null);
    const [event, setEvent] = useState(null);
    const [events, setEvents] = useState(null);
    const [eventInput, setEventInput] = useState('');

    useEffect( 
        () => {
        fetch('/api/events')
            .then(result =>{return result.json()})
            .then(value =>{setEvents(value)});
        }, []
    )

    useEffect(
        () => {
            if (event !== null) {
                setEventInput(event);
            }
        }, []
    )

    // Function to handle date selection
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
        for (let i=0; i<events.length; i++) {
        if (events[i].date === date.toDateString()){
            setEvent(events[i]);
            break;
        }
        else {
            setEvent(null);
        }
        }
        
        // You can add additional logic here, such as fetching events for the selected date.
    };


    return (
        <div>
            <form className="siteSettingsForm" onSubmit={handleSubmit}>
                <h3>Site Settings</h3>

                <label>School Name</label>
                <input
                    type="text"
                    onChange={(e) => setSchoolName(e.target.value)}
                    value={schoolName}
                />
                <label>Mission</label>
                <input
                    type="text"
                    onChange={(e) => setMission(e.target.value)}
                    value={mission}
                />
                <label>Vision</label>
                <input
                    type="text"
                    onChange={(e) => setVision(e.target.value)}
                    value={vision}
                />
                <label>Objectives</label>
                <input
                    type="text"
                    onChange={(e) => setObjectives(e.target.value)}
                    value={objectives}
                />
                <label>Payment Link</label>
                <input
                    type="text"
                    onChange={(e) => setPaymentLink(e.target.value)}
                    value={paymentLink}
                />
                <label>Contact Information</label>
                <input
                    type="text"
                    onChange={(e) => setContactInformation(e.target.value)}
                    value={contactInformation}
                />
                <button>Save</button>
            </form>
            <div className="calendar-container">
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
                    <div>
                        <label>Event:</label>
                        <input
                            type="text"
                            onChange={(e) => setEventInput(e.target.value)}
                            value={eventInput} 
                        />
                        {event !== null ? 
                            <div>
                                <button onClick={
                                    () =>{
                                        if (event !== null) {
                                            fetch('/api/events', {
                                                method: "PUT",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(
                                                    {
                                                        id: event._id,
                                                        event: eventInput
                                                    }
                                                ),
                                                redirect: "follow"
                                            }).then(result => {
                                                console.log(result);
                                                window.location.reload();
                                            })
                                        }
                                    }                                    
                                }>Update</button>
                                <button onClick={
                                    () =>{
                                        if (event !== null) {
                                            fetch('/api/events', {
                                                method: "DELETE",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(
                                                    {
                                                        id: event._id,
                                                    }
                                                ),
                                                redirect: "follow"
                                            }).then(result => {
                                                console.log(result);
                                                window.location.reload();
                                            })
                                        }
                                    }                                    
                                }>Delete</button>
                            </div>
                        : 
                            <button onClick={
                                () =>{
                                    fetch('/api/events', {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(
                                            {
                                                date: selectedDate.toDateString(),
                                                event: eventInput
                                            }
                                        ),
                                        redirect: "follow"
                                    }).then(result => {
                                        console.log(result);
                                        window.location.reload();
                                    })
                                }                                    
                            }>Add</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteSettings;