import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralSchoolInfo.css';

const GeneralSchoolInformation = () => {
    return (
        <div className="School-Information">
            <h1>Welcome to ABC School</h1>
            <h2>Mission:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            {/* Add margin-bottom to the headings */}
            <h2 style={{ marginBottom: '10px' }}>Vision:</h2>
            <p>Ut enim ad minim veniam</p>

            <h2 style={{ marginBottom: '10px' }}>Objectives:</h2>
            <ul>
                <li>- Duis aute irure dolor in reprehenderit in voluptate</li>
                <li>- Duis aute irure dolor in reprehenderit in voluptate</li>
                <li>- Duis aute irure dolor in reprehenderit in voluptate</li>
            </ul>

            {/* Add a space with a non-breaking space for spacing */}
            <p>&nbsp;</p>

            <p>Address: 123 Education St., Learnville</p>
            
            <p>Contact: (123) 456-7890</p>
            <p>Email: info@abcschool.com</p>
            <p>Established: 2023</p>
            <p>Principal: Mr. Knowledge Seeker</p>
            <p><Link to={"/admin"}>Admin Dashboard</Link></p>
            
            {/* Add the "Enroll Now" button here */}
            <Link to={"/enroll"} className="enroll-button">Enroll Now</Link>
        </div>
    );
}

export default GeneralSchoolInformation;
