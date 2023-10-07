import { useEffect } from 'react';
import './css/AdminDashboard.css';
import { useNavigate } from "react-router-dom";


const AdminDashboard = ({ currentUser, setCurrentUser }) => {
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
    
    // setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));
    
    return (
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
    );
};


export default AdminDashboard;