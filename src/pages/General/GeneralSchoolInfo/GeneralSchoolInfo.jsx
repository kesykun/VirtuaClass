// src/GeneralSchoolInformation.jsx
import './GeneralSchoolInfo.css';
import { useContext } from 'react';
import NavBar from '../../../components/NavBar';
import SchoolInfoContext from '../../../contexts/SchoolInfoContext';

const GeneralSchoolInformation = () => {
    const { schoolInfo } = useContext(SchoolInfoContext);
    return (
        <>
            <NavBar  schoolInfo={schoolInfo}/>
            <div className="School-Information">
                <h1>Welcome to {schoolInfo.schoolName}</h1>
                <h2>Mission: </h2>
                <p>{schoolInfo.mission}</p>
                <h2>Vision: </h2>
                <p>{schoolInfo.vision}</p>
                <h2>Objectives: </h2>
                <p>{schoolInfo.objectives}</p>
                <h2>Contact Information:</h2>
                <p>{schoolInfo.contactInformation}</p>
            </div>
        </>
    );
}

export default GeneralSchoolInformation;
