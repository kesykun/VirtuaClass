import { Link } from "react-router-dom";


const AdminDashboard = ({ currentUser, setCurrentUser }) => {
    return (
        <div>
            <div>
                <h1>Firstname: { currentUser.firstname }</h1>
                <h1>Lastname: { currentUser.lastname }</h1>
                <h1>Email: { currentUser.email }</h1>
            </div>
            <p><Link to={"/admin/enrollment_applications"}>Enrollment Applications</Link></p>
            <p><Link to={"/admin/student_accounts"}>Student Accounts</Link></p>
            <p><Link to={"/admin/instructor_accounts"}>Instructor Accounts</Link></p>
            <p><Link to={"/admin/administrator_accounts"}>Administrator Accounts</Link></p>
            <p><Link to={"/admin/site_settings"}>Student Accounts</Link></p>
        </div>
    );
};


export default AdminDashboard;