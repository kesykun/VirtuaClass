
import "./css/EnrollmentApplications.css";
import { useEffect, useState } from "react";

const EnrollmentApplications = () => {
    const [enrollmentApplications, setEnrollmentApplications] = useState([]);

    const getEnrollmentApplications = async () => {
        const response = await fetch('/api/enrollments');
        const json = await response.json();
        console.log(json);
        return json.map(enrollment => {
            return (
                <tr>
                    <td>{ enrollment.firstname }</td>
                    <td>{ enrollment.lastname }</td>
                    <td>{ enrollment.email }</td>
                    <td>{ enrollment.guardianFirstname }</td>
                    <td>{ enrollment.guardianContactNumber }</td>
                </tr>
            );
        });
    };
    useEffect(() => {
        getEnrollmentApplications().then(result => {
            setEnrollmentApplications(result);
        }).catch(err => console.error(err));
    }, []);
    

    return (
        <div>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Guardian Firstname</th>
                    <th>Guardian Contact</th>
                </tr>
                { enrollmentApplications }
            </table>
        </div>
    );
};

export default EnrollmentApplications;