// src/GeneralSchoolInformation.jsx
import './GeneralSchoolInfo.css';
import React from 'react';
import { Link } from 'react-router-dom';

const GeneralSchoolInformation = () => {
    return (
        <div className="School-Information">
            <h1>Welcome to ABC School</h1>
            <h2>Mission: </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <h2>Vision: </h2>
            <p>Ut enim ad minim veniam </p>
            <h2>Objectives: </h2>
            <ul>- Duis aute irure dolor in reprehenderit in voluptate </ul>
            <ul>- Duis aute irure dolor in reprehenderit in voluptate </ul>
            <ul>- Duis aute irure dolor in reprehenderit in voluptate </ul>
            <p>Address: 123 Education St., Learnville</p>
            <p>Contact: (123) 456-7890</p>
            <p>Email: info@abcschool.com</p>
            <p>Established: 2023</p>
            <p>Principal: Mr. Knowledge Seeker</p>
            <p><Link to={"/enrollment_applications"}>Enrollment Applications</Link></p>
        </div>
    );
}

export default GeneralSchoolInformation;
