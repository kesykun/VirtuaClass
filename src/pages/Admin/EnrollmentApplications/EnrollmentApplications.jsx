
import "./css/EnrollmentApplications.css";
import { useEffect, useState } from "react";

const getEnrollmentApplications = async () => {
    const response = await fetch('/api/enrollments');
    return await response.json();
};



const EnrollmentApplications = ({ currentUser, setCurrentUser }) => {

    const [selectedEnrollmentId, setSelectedEnrollmentId] = useState(null);
    const [selectedEnrollment, setSelectedEnrollment] = useState({
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        guardianFirstname: ''
    });

    const [enrollmentApplications, setEnrollmentApplications] = useState([]);
    const [htmlEnrollmentApplications, setHtmlEnrollmentApplications] = useState([]);


    useEffect(() => {
        getEnrollmentApplications().then(result => {
            setEnrollmentApplications(result);
            setHtmlEnrollmentApplications(result.map(enrollment => {
                            return (
                                <tr>
                                    <td>
                                        <button className="selectEnrollmentApplication" onClick={(e) => setSelectedEnrollmentId(e.target.textContent)}>{ enrollment._id }</button>
                                    </td>
                                    <td>{ enrollment.firstname }</td>
                                    <td>{ enrollment.lastname }</td>
                                    <td>{ enrollment.email }</td>
                                </tr>
                            );
                        }
                )
            );
        }).catch(err => console.error(err));
    }, []);



    useEffect(() => {
        if (selectedEnrollmentId) {
            const selected = enrollmentApplications.filter(appli => appli._id === selectedEnrollmentId)[0];
            setSelectedEnrollment(selected);
            console.log(selected.firstname);
        }
    }, [selectedEnrollmentId]);
    
    
    

    return (
        <div>
            <div>
                <h1>Firstname: { currentUser.firstname }</h1>
                <h1>Lastname: { currentUser.lastname }</h1>
                <h1>Email: { currentUser.email }</h1>
            </div>
            <div className="decisionButtons">
                <button 
                    className="decisionButton acceptButton"
                    onClick={() => {
                        if (selectedEnrollmentId) {
                            fetch('/api/enrollments', {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    id: selectedEnrollment._id,
                                    accept: true
                                }),
                                redirect: 'follow'
                            }).then(result => {
                                return result.json();
                            }).then(value => {
                                console.log(value);
                            });
                            // console.log(`Accept: ${selectedEnrollment.email}`);
                        }
                    }}>Accept</button>
                <br/>
                <button 
                    className="decisionButton discardButton"
                    onClick={() => {
                        if (selectedEnrollmentId) {
                            fetch('/api/enrollments', {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    id: selectedEnrollment._id,
                                    accept: false
                                }),
                                redirect: 'follow'
                            }).then(result => {
                                return result.json();
                            }).then(value => {
                                console.log(value);
                            });
                            // console.log(`Discard: ${selectedEnrollment.email}`);
                        }
                    }}>Discard</button>
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                { htmlEnrollmentApplications }
            </table>
            {
                <div className="enrollmentDetails">
                    <h2>ID: { selectedEnrollment._id }</h2>
                    <h2>Firstname: { selectedEnrollment.firstname }</h2>
                    <h2>Lastname: { selectedEnrollment.lastname }</h2>
                    <h2>Email: { selectedEnrollment.email }</h2>
                    <h2>Guardian Firstname: { selectedEnrollment.guardianFirstname } { selectedEnrollment.guardianMiddleInitial } { selectedEnrollment.guardianLastname }</h2>
                    <h2>Guardian Contact: { selectedEnrollment.guardianContactNumber }</h2>
                </div>
            }
        </div>
    );
};

export default EnrollmentApplications;