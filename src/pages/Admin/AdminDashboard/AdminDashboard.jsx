import { Link } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div>
            <p><Link to={"/admin/enrollment_applications"}>Enrollment Applications</Link></p>
            <p><Link to={"/admin/student_accounts"}>Student Accounts</Link></p>
            <p><Link to={"/admin/instructor_accounts"}>Instructor Accounts</Link></p>
            <p><Link to={"/admin/administrator_accounts"}>Administrator Accounts</Link></p>
            <p><Link to={"/admin/site_settings"}>Student Accounts</Link></p>
        </div>
    );
};


export default AdminDashboard;