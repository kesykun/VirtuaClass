
import "./css/EnrollmentApplications.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationPanel = ({ title, children }) => {
    return (
        <section className="content__container">
            <div className="container__heading">
                {title}
            </div>
            <div className="container__body">
                {children}
            </div>
        </section>
    );
};

const ApplicationPanelItem = ({title}) => {
    return (
        <div className="application__item">
            {title}
        </div>
    );
};


const getEnrollmentApplications = async () => {
    const response = await fetch('/api/enrollments');
    return await response.json();
};



const EnrollmentApplications = ({ currentUser, setCurrentUser }) => {
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

    const [selectedEnrollmentId, setSelectedEnrollmentId] = useState(null);
    const [selectedEnrollment, setSelectedEnrollment] = useState({
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        guardianFirstname: ''
    });
    const [selectedEnrollmentCourses, setSelectedEnrollmentCourses]= useState(null);
    const [htmlSelectedEnrollmentCourses, setHtmlSelectedEnrollmentCourses] = useState(null);

    const [enrollmentApplications, setEnrollmentApplications] = useState([]);
    const [htmlEnrollmentApplications, setHtmlEnrollmentApplications] = useState([]);
    const [updateEnrollmentData, setUpdateEnrollmentData] = useState(false);


    useEffect(() => {
        getEnrollmentApplications().then(result => {
            setEnrollmentApplications(result);
            setHtmlEnrollmentApplications(result.map(enrollment => {
                            return (
                                <tr>
                                    <td>
                                        <button className="selectEnrollmentApplication" onClick={(e) => {
                                                setHtmlSelectedEnrollmentCourses(null);
                                                setSelectedEnrollmentId(e.target.textContent);
                                            }}>{ enrollment._id }</button>
                                    </td>
                                    <td>
                                        <ApplicationPanelItem title={ `${enrollment.firstname} ${enrollment.lastname}` } />
                                    </td>
                                </tr>
                                
                            );
                        }
                    )
            );
        }).catch(err => console.error(err));
    }, [updateEnrollmentData]);



    useEffect(() => {
        (async () => {
            if (selectedEnrollmentId) {
                const selected = enrollmentApplications.filter(appli => appli._id === selectedEnrollmentId)[0];
                setSelectedEnrollment(selected);
                console.log(selected.firstname);
                
                let tempHtmlSelectedEnrollmentCourses = [];
                for(let i=0; i< selected.coursesTakenIds.length; i++) {
                    const path = `/api/courses/${selected.coursesTakenIds[i]}`;
                    console.log(path);
                    // console.log(selected);
                    const result = await fetch(path);
                    const value = await result.json();
                    tempHtmlSelectedEnrollmentCourses.push(
                                    <tr>
                                        <td>{ value.name }</td>
                                        <td>P{ value.fee }</td>
                                    </tr>
                    );
                }
                setHtmlSelectedEnrollmentCourses(tempHtmlSelectedEnrollmentCourses);
                return;
            }
        })();
    }, [selectedEnrollmentId]);
    
    
    

    return (
        <main className="main__application">
        <nav className="application__navbar">
            <span>
                <p>Welcome</p>
                <button>{ `${currentUser.firstname} ${currentUser.lastname}` }</button>
            </span>
        </nav>
        <section className="application__section">
            <div className="section__content">
                
                <ApplicationPanel title="Enrollment Applications">
                    <div className="body__application">
                        <table>
                            { htmlEnrollmentApplications }
                        </table>
                    </div>
                </ApplicationPanel>

                <section className="content__button">
                    <button className="button__accept" onClick={() => {
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
                                        setUpdateEnrollmentData(prev => !prev);
                                    });
                                    // console.log(`Accept: ${selectedEnrollment.email}`);
                                    window.location.reload();
                                }
                            }}>Accept</button>
                    <button className="button__discard" onClick={() => {
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
                                        setUpdateEnrollmentData(prev => !prev);
                                    });
                                    // console.log(`Discard: ${selectedEnrollment.email}`);
                                    // setEnrollmentApplications(prev => [...prev.filter(item => item.id !== selectedEnrollment._id)]);
                                    window.location.reload();
                                }
                            }}>Discard</button>
                </section>
                
                <ApplicationPanel title="Application Details">
                    <div className="body__application">
                        <h4>ID: { selectedEnrollment._id }</h4>
                        <h4>Firstname: { selectedEnrollment.firstname }</h4>
                        <h4>Lastname: { selectedEnrollment.lastname }</h4>
                        <h4>Email: { selectedEnrollment.email }</h4>
                        <h4>Guardian Firstname: { selectedEnrollment.guardianFirstname } { selectedEnrollment.guardianMiddleInitial } { selectedEnrollment.guardianLastname }</h4>
                        <h4>Guardian Contact: { selectedEnrollment.guardianContactNumber }</h4>
                        <div className="enrolledCoursesContainer">
                            <h3>Enrolled Courses</h3>
                            <table className="enrolledCoursesTable">
                                <tr>
                                    <th>Course Title</th>
                                    <th>Course Fee</th>
                                </tr>
                                { htmlSelectedEnrollmentCourses !== null ? htmlSelectedEnrollmentCourses : '' }
                            </table>
                        </div>
                    </div>
                </ApplicationPanel>
            </div>
        </section>
        </main>
    );
};

export default EnrollmentApplications;





