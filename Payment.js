import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const { acceptedItems } = location.state || {};
    const [showPaymentMessage, setShowPaymentMessage] = useState(
        localStorage.getItem('showPaymentMessage') === 'true'
    );
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentFormData, setPaymentFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
    });

    useEffect(() => {
        // Calculate total amount when acceptedItems change
        let total = 0;
        acceptedItems.forEach((item) => {
            if (item.status === 'quoted') {
                total += item.projectBudget;
            }
        });
        setTotalAmount(total);

        // Clear payment success message on component mount
        clearPaymentMessage();
    }, [acceptedItems]);

    useEffect(() => {
        // Persist showPaymentMessage state in localStorage
        localStorage.setItem('showPaymentMessage', showPaymentMessage.toString());
    }, [showPaymentMessage]);

    const clearPaymentMessage = () => {
        setShowPaymentMessage(false); // Hide the message
        localStorage.removeItem('showPaymentMessage'); // Remove from localStorage
    };

    const handleChange = (e) => {
        setPaymentFormData({
            ...paymentFormData,
            [e.target.name]: e.target.value
        });
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Simulating payment success
        // You would typically handle payment logic here

        // For demonstration purposes, simulate a successful payment after 2 seconds
        setTimeout(() => {
            setShowPaymentMessage(true);
            localStorage.setItem('showPaymentMessage', 'true'); // Store in localStorage as string

            // Clear the form fields after payment
            setPaymentFormData({
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                cardName: ''
            });
        }, 2000);
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>

            {/* Payment summary */}
            {acceptedItems.length > 0 ? (
                <div>
                    <h3>Items Accepted for Payment:</h3>
                    <ul className="accepted-items-list">
                        {acceptedItems.map((item) => (
                            <li key={item.id} className="accepted-item">
                                <div className="item-info">
                                    <p>Item Name: {item.projectName}</p>
                                    {item.status === 'quoted' && (
                                        <p>Budget: ${item.projectBudget}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Total Amount: ${totalAmount}</p>
                    {/* Payment form */}
                    <form className="payment-form" onSubmit={handlePaymentSubmit}>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={paymentFormData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={paymentFormData.expiryDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={paymentFormData.cvv}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardName">Cardholder Name:</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={paymentFormData.cardName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="pay-button">
                            Pay
                        </button>
                    </form>

                    {/* Payment success flash message */}
                    {showPaymentMessage && (
                        <div className="message-container">
                            <p>Payment Successful!</p>
                        </div>
                    )}
                </div>
            ) : (
                <p>No items selected for payment.</p>
            )}

            {/* Display message when no items are selected */}
            {!acceptedItems || acceptedItems.length === 0 && (
                <p>No items selected for payment.</p>
            )}
        </div>
    );
};

export default Payment;
