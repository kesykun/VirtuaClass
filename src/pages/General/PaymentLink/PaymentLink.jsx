// src/components/PaymentQRLink.jsx
import './PaymentLink.css';
import React from 'react';

const PaymentLink = () => {
    const paymentURL = "https://schoolpaymentlink.com"; // Replace With School's payment link

    return (
        <div className= "PaymentLink">
            <h1>Welcome to ABC School!</h1>
            <h2>Scan to Pay</h2>
            <img src="/qrcode.png" alt="Description of Image"/>
        </div>
    );
}

export default PaymentLink;
