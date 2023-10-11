import './css/SiteSettings.css';
import { useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import { useEffect, useState, useContext } from "react";
import CurrentUserContext from "../../../contexts/currentUserContext";

const SiteSettings = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
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

    const [flickFaq, setFlickFaq] = useState(false);
    const [faqData, setFaqData] = useState(null);
    const [faqCount, setFaqCount] = useState(null);
    const [htmlFaqData, setHtmlFaqData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [temporaryHtmlFaqData, setTemporaryHtmlFaqData] = useState(null);

    useEffect(() => {
        fetch('/api/school')
        .then(result =>{return result.json()})
        .then( value =>
            {
                setSchoolName(value.schoolName);
                setMission(value.mission);
                setVision(value.vision);
                setObjectives(value.objectives);
                setPaymentLink(value.paymentLink);
                setContactInformation(value.contactInformation);
            }
        )
    }, []);
    // const [question, setQuestion] = useState('');
    // const [answer, setAnswer] = useState('');
    const questionStates = [
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState()
    ];
    const answerStates = [
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState(),
        useState()
    ];
    const faqIds = [
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0'),
        useState('0')
    ];

    useEffect(() => {
        fetch('/api/faqs')
        .then(result =>{ return result.json() })
        .then( value =>
            {
                // console.log(questionStates);
                setFaqData(value);
                setFaqCount(value.length);
                for (let i=0; i<value.length; i++) {
                    questionStates[i][1](value[i].question);
                    answerStates[i][1](value[i].answer);
                    faqIds[i][1](value[i]._id);
                    // console.log(questionStates[i][1]);
                }
                setFlickFaq(prev => !prev);
                // console.log(value);
            }
        )
    }, []);

    useEffect(() => {
        // console.log(questionStates[0][0]);
        // console.log(faqIds);
        // console.log(`faqCount: ${faqCount}`);
        // console.log(answerStates);
        let temporaryHtmlFaqData = [];
        if(questionStates[0][0] && answerStates[0][0]) {
            for (let i=0; i<faqCount; i++) {
                temporaryHtmlFaqData.push(
                    (
                        <tr>
                            <td>
                                <input type='text' value={ questionStates[i][0] } onChange={(e) => questionStates[i][1](e.target.value)} />
                            </td>
                            <td>
                                <input type='text' value={ answerStates[i][0] } onChange={(e) => answerStates[i][1](e.target.value)} />
                            </td>
                            <td>
                                <button onClick={async () => {
                                    await fetch('/api/faqs', {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ id: faqIds[i][0] }),
                                        redirect: 'follow'
                                    }).then(result => result.json()).then(value => {
                                        // console.log(value);
                                        window.location.reload();
                                    });
                                }}>Delete</button>
                            </td>
                        </tr>
                    )
                );
            }
            setHtmlFaqData(temporaryHtmlFaqData);
        }
    }, [flickFaq, questionStates, answerStates, faqCount]);

    // useEffect(() => {
    //     if (questionStates[0][0] && answerStates[0][0]) {
    //         let tempFaqData = [];
    //         for (let i=0; i<faqCount; i++) {
    //             tempFaqData.push({
    //                 id: faqIds[i][0],
    //                 question: questionStates[i][0],
    //                 answer: answerStates[i][0]
    //             });
    //         }
    //         setFaqData(tempFaqData);
    //     }
    // }, [flickFaq]);




    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
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
        for (let i=0; i<faqCount; i++) {
            await fetch('/api/faqs', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: faqIds[i],
                    question: questionStates[i][0],
                    answer: answerStates[i][0]
                }),
                redirect: 'follow'
            });
        }
        setIsLoading(false);
        window.location.reload();
        alert("School Information Updated!");
    }



    // calendar shit
    const [selectedDate, setSelectedDate] = useState(null);
    const [event, setEvent] = useState(null);
    const [events, setEvents] = useState(null);
    const [eventInput, setEventInput] = useState('');

    useEffect(() => {
        fetch('/api/events')
            .then(result =>{return result.json()})
            .then(value =>{setEvents(value)});
        }, []);

    useEffect(() => {
        if (event !== null) {
            setEventInput(event);
        }
    }, []);

    // Function to handle date selection
    const handleDateChange = (date) => {
        // console.log(date);
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
            <form className="siteSettingsForm" onSubmit={(e) => {
                    handleSubmit(e);
                    console.log('pressed...');
                }}>
                <div>
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
                    <button disabled={isLoading} style={isLoading ? { opacity: 0.2 }
                         : { opacity: 1 }}>{ isLoading ? 'Saving...' : 'Save'}</button>
                </div>
                
            </form>
            <div>
                <table>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Delete</th>
                    </tr>
                    { htmlFaqData !== null ? htmlFaqData : '' }
                </table>
                <button onClick={() => {
                    setFaqCount(prev => prev + 1);
                }}>Add New FAQ</button>
            </div>
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
                                                body: JSON.stringify({
                                                        id: event._id,
                                                        event: eventInput
                                                    }),
                                                redirect: "follow"
                                            }).then(result => {
                                                // console.log(result);
                                                window.location.reload();
                                            });
                                        }
                                    }                                    
                                }>Update Event</button>
                                <button onClick={
                                    () =>{
                                        if (event !== null) {
                                            fetch('/api/events', {
                                                method: "DELETE",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({ id: event._id }),
                                                redirect: "follow"
                                            }).then(result => {
                                                // console.log(result);
                                                window.location.reload();
                                            })
                                        }
                                    }                                    
                                }>Delete Event</button>
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
                                        // console.log(result);
                                        window.location.reload();
                                    })
                                }                                    
                            }>Add Event</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteSettings;