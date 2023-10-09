// src/components/PaymentQRLink.jsx
import './PaymentLink.css';
import React, { useEffect, useState } from 'react';

const PaymentLink = () => {
    const [paymentLink, setPaymentLink] = useState(''); // Replace With School's payment link
    const [schoolInfo, setSchoolInfo] = useState(null);
    useEffect(() => {
        fetch('/api/school').then(result => {
            return result.json();
        }).then(value => {
            console.log(value.PaymentLink);
            setSchoolInfo(value);
            setPaymentLink(value.paymentLink);
        });
        
    }, []);
    return (
        <div className= "PaymentLink">
            <h1>Welcome to { schoolInfo !== null ? schoolInfo.schoolName : '' }</h1>
            <h2>Scan to Pay</h2>
            <img src={ `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${paymentLink}` } alt="Description of Image"/>
        </div>
    );
}

export default PaymentLink;
