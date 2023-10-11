// src/components/PaymentQRLink.jsx
import './PaymentLink.css';
import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../../components/NavBar';
import SchoolInfoContext from '../../../contexts/SchoolInfoContext';

const PaymentLink = () => {
    const { schoolInfo } = useContext(SchoolInfoContext);
    const [paymentLink, setPaymentLink] = useState(''); // Replace With School's payment link
    const [schoolInfoState, setSchoolInfoState] = useState(null);
    useEffect(() => {
        fetch('/api/school').then(result => {
            return result.json();
        }).then(value => {
            console.log(value.PaymentLink);
            setSchoolInfoState(value);
            setPaymentLink(value.paymentLink);
        });
        
    }, []);
    return (
        <>
            <NavBar  schoolInfo={schoolInfo}/>
            <div className= "PaymentLink">
                <h1>Welcome to { schoolInfo !== null ? schoolInfo.schoolName : '' }</h1>
                <h2>Scan to Pay</h2>
                <img src={ `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${paymentLink}` } alt="Description of Image"/>
            </div>
        </>
    );
}

export default PaymentLink;
